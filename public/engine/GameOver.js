var gameOverText;
var yourScoreText;
var resetBtn;
var exitBtn;
var userName;
var highScore;

class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameOver'
        });
    }


    preload() {
        // loads the play again button
        this.load.image('resetBtn', 'images/resetYLW.png');

        // loads the exit button
        this.load.image('exitBtn', 'images/quitRED.png');


    }

    create() {
        backGroundImg = this.backGround = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
        backGroundImg = this.backGround.setDisplaySize(gameWidth, gameHeight);


        gameOverText = this.add.text(75, 35, 'GameOver', {
            fontSize: '60px',
            color: 'black',
            fontFamily: 'Courier',
        });

        scoreText = this.add.text(75, 150,'Score:' + score, {
            fontSize: '40px',
            color: 'black',
            fontFamily: 'Courier',
        });



        exitBtn = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.5, 'exitBtn');
        exitBtn.setScale(gameWidth / 256);


        resetBtn = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.9, 'resetBtn');
        resetBtn.setScale(gameWidth / 256);

        resetBtn.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                window.location.href = 'index.html';
                }, this);

        exitBtn.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                window.location.href = '../index.html';
            }, this);

        highScore = this.checkScore();
    }

    async checkScore() {
        var userId = window.localStorage.getItem('id');
        var db = firebase.firestore().collection("Users").doc(userId);
        var data = -4;

        await db.get().then(function (doc) {
            data = doc.data();
            console.log(data);
        });
        userName = data.UserName;
        if (data.HighScore < score) {
            this.updateScore(db);
            return score;
        } else {
            return data.HighScore;
        }
    }

    updateScore(db) {
        db.update({
            HighScore: score
        }).then(function () {
            console.log("Document successfully updated!");
        }).catch(function(error) {
            console.error("Error updating document: ", error);
        });
    }

    update() {


    }
}
