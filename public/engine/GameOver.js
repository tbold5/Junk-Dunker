var gameOverText;
var resetBtn;
var exitBtn;

class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameOver'
        });
    }


    preload(){
        // loads the play again button
        this.load.image('resetBtn', 'images/reset.png');

        // loads the exit button
        this.load.image('exitBtn', 'images/quit.png');




    }

    create(){

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

        exitBtn = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.5, 'exitBtn');
        exitBtn.setScale(2.5);


        resetBtn = this.physics.add.sprite(gameWidth / 2, gameHeight / 2, 'resetBtn');
        resetBtn.setScale(2.5);

    }

    update(){
            resetBtn.setInteractive({ useHandCursor: true })
                .on('pointerdown', () => {
                    this.scene.start('Level1');
                }, this);


        }

}