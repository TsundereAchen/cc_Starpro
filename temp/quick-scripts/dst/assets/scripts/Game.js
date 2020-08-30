
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a442fqZsiZE6rU8EPSvgGUz', 'Game');
// scripts/Game.js

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
    //添加星星预设
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    //产生星星随机时间范围
    maxStarDuration: 0,
    minStarDuration: 0,
    //地面节点，确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    //player节点，用于获取主角弹跳的高度，和控制主角行动
    player: {
      "default": null,
      type: cc.Node
    },
    //score label的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    //得分音效
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    this.groundY = this.ground.y + this.ground.height / 2;
    this.score = 0; //计时器

    this.timer = 0;
    this.startDuration = 0; //生成一个星星

    this.spawnNewStar();
  },
  gameScore: function gameScore() {
    this.score += 1;
    this.scoreDisplay.string = "Score:" + this.score; //播放得分音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  spawnNewStar: function spawnNewStar() {
    var newStar = cc.instantiate(this.starPrefab);
    this.node.addChild(newStar); //为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); //在星星组件上暂存game的引用

    newStar.getComponent("Star").game = this; //重置计时器，根据消失时间范围随机一个值

    this.startDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0;
    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; //获取屏幕尺寸

    var winSize = cc.view.getVisibleSize();
    var maxX = winSize.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; //返回星星坐标

    return cc.v2(randX, randY);
  },
  start: function start() {},
  update: function update(dt) {
    if (this.timer > this.startDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gameOver: function gameOver() {
    //停止player跳跃动作
    this.player.stopAllActions();
    cc.director.loadScene('game');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0Iiwic2NvcmUiLCJ0aW1lciIsInN0YXJ0RHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJnYW1lU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJuZXdTdGFyIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldE5ld1N0YXJQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImdhbWUiLCJNYXRoIiwicmFuZG9tIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJ3aW5TaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwibWF4WCIsIndpZHRoIiwidjIiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBRko7QUFPUjtBQUNBQyxJQUFBQSxlQUFlLEVBQUUsQ0FSVDtBQVNSQyxJQUFB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QWEsS0FBS0MsYUFBckIsRUFBb0M7QUFDaEMsV0FBSzRCLFFBQUw7QUFDQTtBQUNIOztBQUNELFNBQUs3QixLQUFMLElBQWM0QixFQUFkO0FBQ0gsR0FyRkk7QUF1RkxDLEVBQUFBLFFBQVEsRUFBRSxvQkFBVztBQUNqQjtBQUNBLFNBQUt2QyxNQUFMLENBQVl3QyxjQUFaO0FBQ0FuRCxJQUFBQSxFQUFFLENBQUNvRCxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDtBQTNGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/mt7vliqDmmJ/mmJ/pooTorr5cclxuICAgICAgICBzdGFyUHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8v5Lqn55Sf5pif5pif6ZqP5py65pe26Ze06IyD5Zu0XHJcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICAvL+WcsOmdouiKgueCue+8jOehruWumuaYn+aYn+eUn+aIkOeahOmrmOW6plxyXG4gICAgICAgIGdyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3BsYXllcuiKgueCue+8jOeUqOS6juiOt+WPluS4u+inkuW8uei3s+eahOmrmOW6pu+8jOWSjOaOp+WItuS4u+inkuihjOWKqFxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9zY29yZSBsYWJlbOeahOW8leeUqFxyXG4gICAgICAgIHNjb3JlRGlzcGxheToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/lvpfliIbpn7PmlYhcclxuICAgICAgICBzY29yZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodC8yO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIC8v6K6h5pe25ZmoXHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydER1cmF0aW9uID0gMDtcclxuICAgICAgICAvL+eUn+aIkOS4gOS4quaYn+aYn1xyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVTY29yZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IFwiU2NvcmU6XCIgKyB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8v5pKt5pS+5b6X5YiG6Z+z5pWIXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xyXG4gICAgICAgIC8v5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuICAgICAgICAvL+WcqOaYn+aYn+e7hOS7tuS4iuaaguWtmGdhbWXnmoTlvJXnlKhcclxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudChcIlN0YXJcIikuZ2FtZSA9IHRoaXM7XHJcbiAgICAgICAgLy/ph43nva7orqHml7blmajvvIzmoLnmja7mtojlpLHml7bpl7TojIPlm7Tpmo/mnLrkuIDkuKrlgLxcclxuICAgICAgICB0aGlzLnN0YXJ0RHVyYXRpb24gPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArIE1hdGgucmFuZG9tKCkqKHRoaXMubWF4U3RhckR1cmF0aW9uLXRoaXMubWluU3RhckR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcmFuZFggPSAwO1xyXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkqdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTA7XHJcbiAgICAgICAgLy/ojrflj5blsY/luZXlsLrlr7hcclxuICAgICAgICB2YXIgd2luU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICB2YXIgbWF4WCA9IHdpblNpemUud2lkdGgvMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpLTAuNSkqMiptYXhYO1xyXG4gICAgICAgIC8v6L+U5Zue5pif5pif5Z2Q5qCHXHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oZHQpICB7XHJcbiAgICAgICAgaWYodGhpcy50aW1lciA+IHRoaXMuc3RhcnREdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8v5YGc5q2icGxheWVy6Lez6LeD5Yqo5L2cXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=