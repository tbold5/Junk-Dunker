var recyMan;
var speechBubble;
var playBtn;

// Creates the intro page that appears after the Play button is pushed.
// Sub Class of Phaser Engine is created.
class Intro extends Phaser.Scene {
    //Creates constructor for intro object. 
    constructor() {
        // Calls constructor for parent class that uses key value pair.
        super({
            key: 'Intro'
        });
    }

    //Loads first three images to set scene
    preload() {
        // loads the background image
        this.load.image('bg', 'images/comic.gif');

        // loads the recycle man
        this.load.image('recycleMan', 'images/recyclemans.png');

        //  loads the speech bubble
        this.load.image('speech', 'images/party.png');
    }

    // Creates the intro page with the three images
    create() {
        gameWidth = game.config.width;
        gameHeight = game.config.height;
        // Adds background image to screen and sizes it for screen 
        backGroundImg = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
        backGroundImg.setDisplaySize(gameWidth, gameHeight);
        // Adds recycle man image to screen and sizes it for screen
        recyMan = this.add.image(gameWidth / 4, gameHeight / 1.11, 'recycleMan');
        recyMan.setScale(0.5);
        //Adds speech bubbles and sizes them for the screen
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

    // Updates the intro scene
    update() {
        this.scene.launch('Level1');
    }
}