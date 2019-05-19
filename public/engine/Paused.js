// var musicOn = true;
// var musicBtn;
// var paused;
// var quitBtn;
// var resetBtn;
// var backBtn;
//
//
//
// class Paused extends Phaser.Scene {
//     constructor() {
//         super({
//             key: 'Paused'
//         });
//     }
//     preload() {
//         this.scene.launch('Level1');
//         // loads the background image
//         this.load.image('bg', 'images/backGround.gif');
//
//         // loads the reset button image
//         this.load.image('resetBtn', 'images/resetYlW.png');
//
//         // loads the pause button image
//         this.load.image('pause', 'images/pause.png');
//
//         // loads the music off button image
//         this.load.image('musicOff', 'images/musicOff.png');
//
//         // loads the music on button image
//         this.load.image('musicOn', 'images/musicOn.png');
//
//
//
//     }
//
//     create() {
//
//         gameWidth = game.config.width;
//         gameHeight = game.config.height;
//
//         backGroundImg = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
//         backGroundImg.setDisplaySize(gameWidth, gameHeight);
//
//         paused = this.add.image(100,gameHeight/2,'pause');
//         paused.setScale(2);
//
//         backBtn = this.physics.add.sprite(gameWidth / 1.25, gameHeight / 1.07, 'backBtn');
//         backBtn.setScale(2);
//
//         musicBtn = this.add.sprite(100,300,'musicOn');
//
//
//
//         backBtn.setInteractive({useHandCursor: true})
//             .on('pointerdown', () => {
//
//             }, this);
//
//
//     }
//
//
//     update() {
//
//         musicBtn.setInteractive({useHandCursor: true})
//             .on('pointerdown', () => {
//                 if(musicOn) {
//                     musicBtn.destroy();
//                     musicOn = false;
//                     musicBtn = this.add.sprite(100,300,'musicOff');
//
//
//                 } else {
//                     musicBtn.destroy();
//                     musicOn = true;
//                     musicBtn = this.add.sprite(100,300,'musicOn');
//
//                 }
//
//             }, this);
//
//     }
// }
