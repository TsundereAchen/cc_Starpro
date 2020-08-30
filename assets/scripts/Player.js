// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        //跳跃高度
        jumpHeight: 0,
        //跳跃持续时间
        jumpDuration: 0,
        //最大速度
        maxMoveSpeed: 0,
        //加速度
        accel: 0,
        //跳跃音效
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.jumpAction = this.setJumpAcion();
        this.node.runAction(this.jumpAction);
        //控制方向
        this.accLeft = false;
        this.accRight = false;
        //水平方向速度
        this.xSpeed = 0;
        //键盘事件监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onkeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onkeyUp,this);
    },

    onDestory() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onkeyDown,this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onkeyUp,this);
    },

    /**
     * moveBy: 在规定时间移动一段距离，第二个参数x,y是相当于当前节点的坐标，不是绝对坐标
     * cc.v2(x,y)：创建一个二维向量
     */
    setJumpAcion: function() {
        //上升
        var jumpUp = cc.moveBy(this.jumpDuration,cc.v2(0,this.jumpHeight)).easing(cc.easeCubicActionOut());
        //下落
        var jumpDown = cc.moveBy(this.jumpDuration,cc.v2(0,-this.jumpHeight)).easing(cc.easeCubicActionIn());
        //添加一个回调函数
        var callback = cc.callFunc(this.playJumpSound, this);
        //不断重复，落地获得声音
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    },

    playJumpSound: function() {
        //调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    onkeyDown(event) {
        if(event.keyCode == cc.macro.KEY.a) {
            this.accLeft = true;
        } 
        else if(event.keyCode == cc.macro.KEY.d) {
            this.accRight = true;
        }
    },

    onkeyUp(event) {
        if(event.keyCode == cc.macro.KEY.a) {
            this.accLeft = false;
        } 
        else if(event.keyCode == cc.macro.KEY.d) {
            this.accRight = false;
        }
    },

    start () {

    },

    update (dt) {
        //根据加速度方向每帧更新速度
        if(this.accLeft) {
            this.xSpeed -= this.accel*dt;
        }
        else if(this.accRight) {
            this.xSpeed += this.accel*dt;
        }

        if(Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = this.maxMoveSpeed*(this.xSpeed>0?1:-1);
        }
        //获取屏幕尺寸
        var winSize = cc.view.getVisibleSize();
        //获取当前x
        var len = this.node.x + this.xSpeed*dt;
        if(len >= -winSize.width/2 && len <= winSize.width/2) {
            this.node.x += this.xSpeed*dt;
        } 
    },
});
