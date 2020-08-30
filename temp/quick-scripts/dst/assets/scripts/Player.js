
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f99867g1cJJ4roMza3ZuGyk', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
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
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.jumpAction = this.setJumpAcion();
    this.node.runAction(this.jumpAction); //控制方向

    this.accLeft = false;
    this.accRight = false; //水平方向速度

    this.xSpeed = 0; //键盘事件监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onkeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onkeyUp, this);
  },
  onDestory: function onDestory() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onkeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onkeyUp, this);
  },

  /**
   * moveBy: 在规定时间移动一段距离，第二个参数x,y是相当于当前节点的坐标，不是绝对坐标
   * cc.v2(x,y)：创建一个二维向量
   */
  setJumpAcion: function setJumpAcion() {
    //上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); //下落

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); //添加一个回调函数

    var callback = cc.callFunc(this.playJumpSound, this); //不断重复，落地获得声音

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  playJumpSound: function playJumpSound() {
    //调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onkeyDown: function onkeyDown(event) {
    if (event.keyCode == cc.macro.KEY.a) {
      this.accLeft = true;
    } else if (event.keyCode == cc.macro.KEY.d) {
      this.accRight = true;
    }
  },
  onkeyUp: function onkeyUp(event) {
    if (event.keyCode == cc.macro.KEY.a) {
      this.accLeft = false;
    } else if (event.keyCode == cc.macro.KEY.d) {
      this.accRight = false;
    }
  },
  start: function start() {},
  update: function update(dt) {
    //根据加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }

    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * (this.xSpeed > 0 ? 1 : -1);
    }

    this.node.x += this.xSpeed * dt;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJzZXRKdW1wQWNpb24iLCJub2RlIiwicnVuQWN0aW9uIiwiYWNjTGVmdCIsImFjY1JpZ2h0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbmtleURvd24iLCJLRVlfVVAiLCJvbmtleVVwIiwib25EZXN0b3J5Iiwib2ZmIiwianVtcFVwIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJqdW1wRG93biIsImVhc2VDdWJpY0FjdGlvbkluIiwiY2FsbGJhY2siLCJjYWxsRnVuYyIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGSjtBQUdSO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpOO0FBS1I7QUFDQUMsSUFBQUEsWUFBWSxFQUFFLENBTk47QUFPUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUUsQ0FSQztBQVNSO0FB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LEVBQW9DO0FBQ3JDLFdBQUsvQixRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUFDSixHQWxFSTtBQW9FTFMsRUFBQUEsT0FwRUssbUJBb0VHaUIsS0FwRUgsRUFvRVU7QUFDWCxRQUFHQSxLQUFLLENBQUNDLE9BQU4sSUFBaUI1QyxFQUFFLENBQUM2QyxLQUFILENBQVNDLEdBQVQsQ0FBYUMsQ0FBakMsRUFBb0M7QUFDaEMsV0FBSy9CLE9BQUwsR0FBZSxLQUFmO0FBQ0gsS0FGRCxNQUdLLElBQUcyQixLQUFLLENBQUNDLE9BQU4sSUFBaUI1QyxFQUFFLENBQUM2QyxLQUFILENBQVNDLEdBQVQsQ0FBYUUsQ0FBakMsRUFBb0M7QUFDckMsV0FBSy9CLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSDtBQUNKLEdBM0VJO0FBNkVMZ0MsRUFBQUEsS0E3RUssbUJBNkVJLENBRVIsQ0EvRUk7QUFpRkxDLEVBQUFBLE1BakZLLGtCQWlGR0MsRUFqRkgsRUFpRk87QUFDUjtBQUNBLFFBQUcsS0FBS25DLE9BQVIsRUFBaUI7QUFDYixXQUFLRSxNQUFMLElBQWUsS0FBS1gsS0FBTCxHQUFXNEMsRUFBMUI7QUFDSCxLQUZELE1BR0ssSUFBRyxLQUFLbEMsUUFBUixFQUFrQjtBQUNuQixXQUFLQyxNQUFMLElBQWUsS0FBS1gsS0FBTCxHQUFXNEMsRUFBMUI7QUFDSDs7QUFFRCxRQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLbkMsTUFBZCxJQUF3QixLQUFLWixZQUFoQyxFQUE4QztBQUMxQyxXQUFLWSxNQUFMLEdBQWMsS0FBS1osWUFBTCxJQUFtQixLQUFLWSxNQUFMLEdBQVksQ0FBWixHQUFjLENBQWQsR0FBZ0IsQ0FBQyxDQUFwQyxDQUFkO0FBQ0g7O0FBRUQsU0FBS0osSUFBTCxDQUFVd0MsQ0FBVixJQUFlLEtBQUtwQyxNQUFMLEdBQVlpQyxFQUEzQjtBQUNIO0FBL0ZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvL+i3s+i3g+mrmOW6plxyXG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXHJcbiAgICAgICAgLy/ot7Pot4PmjIHnu63ml7bpl7RcclxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy/mnIDlpKfpgJ/luqZcclxuICAgICAgICBtYXhNb3ZlU3BlZWQ6IDAsXHJcbiAgICAgICAgLy/liqDpgJ/luqZcclxuICAgICAgICBhY2NlbDogMCxcclxuICAgICAgICAvL+i3s+i3g+mfs+aViFxyXG4gICAgICAgIGp1bXBBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjaW9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmp1bXBBY3Rpb24pO1xyXG4gICAgICAgIC8v5o6n5Yi25pa55ZCRXHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIC8v5rC05bmz5pa55ZCR6YCf5bqmXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG4gICAgICAgIC8v6ZSu55uY5LqL5Lu255uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMub25rZXlEb3duLHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5vbmtleVVwLHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3RvcnkoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLm9ua2V5RG93bix0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9ua2V5VXAsdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbW92ZUJ5OiDlnKjop4Tlrprml7bpl7Tnp7vliqjkuIDmrrXot53nprvvvIznrKzkuozkuKrlj4LmlbB4LHnmmK/nm7jlvZPkuo7lvZPliY3oioLngrnnmoTlnZDmoIfvvIzkuI3mmK/nu53lr7nlnZDmoIdcclxuICAgICAqIGNjLnYyKHgseSnvvJrliJvlu7rkuIDkuKrkuoznu7TlkJHph49cclxuICAgICAqL1xyXG4gICAgc2V0SnVtcEFjaW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvL+S4iuWNh1xyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sY2MudjIoMCx0aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xyXG4gICAgICAgIC8v5LiL6JC9XHJcbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLGNjLnYyKDAsLXRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcclxuICAgICAgICAvL+a3u+WKoOS4gOS4quWbnuiwg+WHveaVsFxyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNjLmNhbGxGdW5jKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcbiAgICAgICAgLy/kuI3mlq3ph43lpI3vvIzokL3lnLDojrflvpflo7Dpn7NcclxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duLCBjYWxsYmFjaykpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5SnVtcFNvdW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvL+iwg+eUqOWjsOmfs+W8leaTjuaSreaUvuWjsOmfs1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25rZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuYSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25rZXlVcChldmVudCkge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmEpIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8v5qC55o2u5Yqg6YCf5bqm5pa55ZCR5q+P5bin5pu05paw6YCf5bqmXHJcbiAgICAgICAgaWYodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwqZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsKmR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCoodGhpcy54U3BlZWQ+MD8xOi0xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkKmR0O1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==