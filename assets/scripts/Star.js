// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        //星星和主角之间的距离小于这个值，完成收集
       pickRadius: 0,
    },

    onLoad () {},

    start () {

    },

    getPlayerDistance: function() {
        //根据player节点判断距离    
        var playerPos = this.game.player.getPosition();
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    },

    onPicked: function() {
        //当星星被收集，生成新的星星
        this.game.spawnNewStar();
        //销毁当前节点
        this.game.gameScore();
        this.node.destroy();
    },

    update: function() {
        if(this.getPlayerDistance() < this.pickRadius) {
            this.onPicked();
            return;
        }
        //更新星星透明度
        var opacityRatio = 1-this.game.timer/this.game.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio*(255-minOpacity));
    },
});
