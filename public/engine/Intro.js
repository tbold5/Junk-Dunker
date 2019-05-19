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
        this.load.image('comicDone', 'images/comicDONE.png');


        // loads the speech bubble which allows user to exit the game
        this.load.image('nahBtn', 'images/nah.gif');

        // loads the speech bubble which allows user to play the game
        this.load.image('yesBtn', 'images/yesBubble.gif');




    }
    create() {
        var nahBtn;
        var yesBtn;
        var backGround;


        gameWidth = game.config.width;
        gameHeight = game.config.height;

        backGround = this.add.image(gameWidth / 2, gameHeight / 2, 'comicDone');
        backGround.setDisplaySize(gameWidth, gameHeight);


        yesBtn = this.physics.add.sprite(gameWidth / 1.5, gameHeight / 1.3, 'yesBtn');
        yesBtn.setScale(0.3);


        nahBtn = this.physics.add.sprite(gameWidth / 1.25, gameHeight / 1.2, 'nahBtn');
        nahBtn.setScale(0.4);

        nahBtn.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                window.location.href = '../index.html';
            }, this);

        yesBtn.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.scene.start('Level1');
            }, this);




    }


    update() {

    }
}