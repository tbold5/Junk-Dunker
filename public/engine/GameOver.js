var gameOverText;

class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameOver'
        });
    }

    preLoad(){

    }

    create(){

        // creates the music
        this.bgmusic = this.sound.add('bgmusic');
        this.bgmusic.play();


        backGroundImg = this.backGround = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
        backGroundImg = this.backGround.setDisplaySize(gameWidth, gameHeight);


        gameOverText = this.add.text(75, 35, 'GameOver', {
            fontSize: '60px',
            color: 'black',
            fontFamily: 'Courier',
        });

        scoreText = this.add.text(75,150,'Score:' + score, {
            fontSize:'40px',
            color: 'black',
            fontFamily: 'Courier',
        });


    }

    update(){

    }

}