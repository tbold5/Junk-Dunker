var recyMan;
var speechBubble;
var playBtn;

class Intro extends Phaser.Scene {
    constructor() {
        super({
            key: 'Intro'
        });
    }
    preload() {
        // loads the background image
        this.load.image('bg', 'images/comic.gif');

        // loads the recycle man
        this.load.image('recycleMan', 'images/recyclemans.png');

        //  loads the speech bubble
        this.load.image('speech', 'images/party.png');



    }
    create() {
        gameWidth = game.config.width;
        gameHeight = game.config.height;

        backGroundImg = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
        backGroundImg.setDisplaySize(gameWidth, gameHeight);

        recyMan = this.add.image(gameWidth / 4, gameHeight / 1.11, 'recycleMan');
        recyMan.setScale(0.5);

        speechBubble = this.add.image(gameWidth / 2.8, gameHeight / 1.2, 'speech');
        speechBubble.setScale(0.4);
        //
        // playBtn = this.physics.add.sprite(gameWidth / 1.25, gameHeight / 1.07, 'exitBtn');
        // playBtn.setScale(2);
        //
        //     playBtn.setInteractive({useHandCursor: true})
        //         .on('pointerdown', () => {
        //             this.scene.start('Level1');
        //         }, this);
        //
        // }
    }

    update() {
        this.scene.launch('Level1');
    }
}