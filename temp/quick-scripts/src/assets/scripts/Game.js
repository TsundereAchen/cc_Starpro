"use strict";
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