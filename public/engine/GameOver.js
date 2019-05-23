var resetBtn;
var exitBtn;
var userName;
var highScore;
var gameOverText;

// Subclass of Phaser engine is created
class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameOver'
        });
    }


    // Loads the assets onto the scene
    preload() {

        // Loads the play again button
        this.load.image('resetBtn', 'images/resetYLW.png');

        // Loads the exit button
        this.load.image('exitBtn', 'images/quitRED.png');


    }

    // Creates all the assets onto the scene
    create() {

        // Creates the background image onto the page
        backGroundImg = this.backGround = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');

        // Sets the size to fit the screen
        backGroundImg = this.backGround.setDisplaySize(gameWidth, gameHeight);


        // Creates the game over text to the scene
        gameOverText = this.add.text(gameWidth / 7.5, 35, 'GameOver', {
            fontSize: '60px',
            color: 'black',
            fontFamily: 'Courier',
        });

        // Creates the score text to the scene
        scoreText = this.add.text(75, 150,'Score:' + score, {
            fontSize: '40px',
            color: 'black',
            fontFamily: 'Courier',
        });


        // Creates the exit button onto the page
        exitBtn = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.5, 'exitBtn');

        // Sets the scale of the exit button
        exitBtn.setScale(gameWidth / 256);


        // Creates the reset button onto the page
        resetBtn = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.9, 'resetBtn');

        // Sets the scale of the reset button
        resetBtn.setScale(gameWidth / 256);

        // Implements the exit button to become interactive, on click brings user back to home page
        exitBtn.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                window.location.href = '../index.html';
            }, this);

        // Implements the reset button to become interactive, on click restarts the game
        resetBtn.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                window.location.href = 'index.html';
                }, this);

        // Sets the highscore
        highScore = this.checkScore();
    }

    // Checks the score with the database, if the new score is higher, score gets updated
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


    // Updates the score in the database
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
