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
        this.load.image('bg', 'images/comicDONE.png');

        // loads the speech bubble which allows user to exit the game
        this.load.image('exitBtn', 'images/nah.gif');

        // loads the speech bubble which allows user to play the game
        this.load.image('playBtn', 'images/yesBubble.gif');




    }
    create() {
        var nahBtn;
        var playBtn;


        gameWidth = game.config.width;
        gameHeight = game.config.height;

        backGroundImg = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
        backGroundImg.setDisplaySize(gameWidth, gameHeight);


        playBtn = this.physics.add.sprite(gameWidth / 1.5, gameHeight / 1.3, 'playBtn');
        playBtn.setScale(0.3);

        playBtn.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.scene.start('Level1');
            }, this);


        nahBtn = this.physics.add.sprite(gameWidth / 1.25, gameHeight / 1.2, 'exitBtn');
        nahBtn.setScale(0.4);

        nahBtn.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                window.location.href = '../index.html';
            }, this);



    }


    update() {
        // this.scene.launch('Level1');
    }
}