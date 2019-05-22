var bgMusic;

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
        this.load.image('backGround', 'images/comicDONE.png');

        // loads the recycle man
        this.load.image('yesSpeech', 'images/yesBubble.gif');

        //  loads the speech bubble
        this.load.image('noSpeech', 'images/nah.gif');

        // loads the background music onto the scene
        this.load.audio('music', 'audio/gameplaymusic.mp3');
    }

    // Creates the intro page with the three images
    create() {
        var backGroundImg;
        var yesSpeech;
        var noSpeech;

        gameWidth = game.config.width;
        gameHeight = game.config.height;

        bgMusic = this.sound.add('music');
        bgMusic.play();
        // Creates background image to screen and sizes it for screen
        backGroundImg = this.add.image(gameWidth / 2, gameHeight / 2, 'backGround');

        backGroundImg.setDisplaySize(gameWidth, gameHeight);

        // Creates recycle man image to screen and sizes it for screen
        yesSpeech = this.physics.add.sprite(gameWidth / 1.5, gameHeight / 1.3, 'yesSpeech');

        // Sets the scale of the speech button
        yesSpeech.setScale(gameWidth / 1250);

        // Creates speech bubbles and sizes them for the screen
        noSpeech = this.physics.add.sprite(gameWidth / 1.25, gameHeight / 1.17, 'noSpeech');

        // Sets the scale of the speech button
        noSpeech.setScale(gameWidth / 1200);


        // Sets the speech button to interactive
        yesSpeech.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                // Starts the Level 1 scene
                this.scene.start('Level1');
            }, this);


        // Sets the speech button to interactive
        noSpeech.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                // Brings user back to home screen
                window.location.href = 'index.html';
            }, this);

    }

    // Updates the intro scene
    update() {

    }
}
