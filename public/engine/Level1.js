var healthBar;
var blueBin;
var blackBin;
var greenBin;
var yellowBin;
var greyBin;
var bagImg;
var backGroundImg;
var groundImg;
var boardBoxImg;
var detergentImg;
var jarImg;
var milkImg;
var newsPaperImg;
var tinCanImg;
var pizzaBoxImg;
var plasticBagImg;
var treeBranchImg;
var gameOverImg;
var mugImg;
var music;
var platforms;
var gameWidth;
var gameHeight;
var scoreText;
var score = 0;
var beerBottleImg;
var popSound;
var border;
var container;
var healthDecreased = 0;
var trashList;
var binList;
var paperList;
var muteButton;
var musicOn = true;
var isPaper = ['boardBox', 'bags', 'newsPaper', 'pizzaBox'];
var isGlass = ['beerBottle'];
var isTrash = ['plasticBag'];
var isPlastic = ['detergent', 'waterBottle', 'milk'];
var isCompost = ['treeBranch'];
var greenList = ['boardBoxImg', 'trashImg', 'bagImg', 'detergentImg'];
var itemList = ['beerBottle', 'detergent', 'boardBox', 'bags', 'waterBottle', 'milk', 'newsPaper',
    'tinCan', 'pizzaBox', 'mug', 'plasticBag', 'treeBranch'];


class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1'
        });
    }

    // Loads all the images and audio files into the game
    preload() {
        // Loads all the audio files
        this.load.audio('bgmusic', ['audio/gameplaymusic.mp3']);
        this.load.audio('pop', ['audio/pop.mp3']);
        // loads all the recycling bins
        this.load.image('greyBin', 'images/greybin1.png');
        this.load.image('blueBin', 'images/bluebin1.png');
        this.load.image('yellowBin', 'images/yellowbin1.png');
        this.load.image('blackBin', 'images/blackbin.png');
        this.load.image('greenBin', 'images/greenbin1.png');
        // loads the health bar
        this.load.image('health', 'images/3Heart.png');

        // loads the two heart image
        this.load.image('twoHeart', 'images/TwoHeart.png');

        // loads the one heart image
        this.load.image('oneHeart', 'images/OneHeart.png');

        // loads the no heart image
        this.load.image('noHeart', 'images/ZeroHeart.png');

        // loads the platform image
        this.load.image('ground', 'images/platform.png');

        // loads the background image
        this.load.image('bg', 'images/backGround.gif');

        // loads the border
        this.load.image('border', 'images/border.png');

        // loads all the garbage image
        this.load.image('bags', 'images/bags.png');

        // loads the detergent image
        this.load.image('detergent', 'images/detergent.png');

        // loads the beer bottle image
        this.load.image('beerBottle', 'images/beerbottle.png');

        // loads the cardboard box image
        this.load.image('boardBox', 'images/cardboardbox.png');

        // loads the jar image
        this.load.image('jar', 'images/jar.png');

        //loads the milk image
        this.load.image('milk', 'images/milk.png');

        // loads the newspaper image
        this.load.image('newsPaper', 'images/newspaper.png');

        // loads the pizza box image
        this.load.image('pizzaBox', 'images/pizzabox.png');

        // loads the mug image
        this.load.image('mug', 'images/porcelainmug.png');

        // loads the tin can box image
        this.load.image('tinCan', 'images/tincan.png');

        // loads the pizza box image
        this.load.image('waterBottle', 'images/water.png');

        // loads the plastic bag image
        this.load.image('plasticBag', 'images/plasticbag.png');

        // loads the tree branch image
        this.load.image('treeBranch', 'images/treebranch.png');

        // loads the mute button
        this.load.image('muteButton', 'images/milk.png');

        // loads teh game over screen
        this.load.image('loserScreen', 'images/wooden.png');

    }

    // Checks if the garbage is Paper and returns true if it is
    isPaper(imgName) {
        for (let i = 0; i < isPaper.length; i++) {
            if (imgName === isPaper[i]) {
                return true
            }
        }
    }

    // Checks if the garbage is Glass and returns true if it is
    isGlass(imgName) {
        for (let i = 0; i < isGlass.length; i++) {
            if (imgName === isGlass[i]) {
                return true
            }
        }
    }

    // Checks if the garbage is Trash and returns true if it is
    isTrash(imgName) {
        for (let i = 0; i < isTrash.length; i++) {
            if (imgName === isTrash[i]){
                return true
            }
        }
    }

    // Checks if the garbage is Plastic and returns true if it is
    isPlastic(imgName) {
        for (let i = 0; i < isPlastic.length; i++) {
            if (imgName === isPlastic[i]){
                return true
            }
        }
    }

    // Checks if the garbage is Compost and returns true if it is
    isCompost(imgName) {
        for (let i = 0; i < isCompost.length; i++) {
            if (imgName === isCompost[i]){
                return true
            }
        }
    }

    addScore(img) {
        img.disableBody(true, true);
        score += 1;
        popSound.play();
        scoreText.setText('Score: ' + score);
    }

    // Makes the garbage upon collision with bin
    collectGarbage(bin, img) {
        if ((bin.name === 'yellowBin') && (this.isPaper(img.name))) {
            this.addScore(img)
        } else if ((bin.name === 'greyBin') && (this.isGlass(img.name))) {
            this.addScore(img)
        } else if ((bin.name === 'blackBin') && (this.isTrash(img.name))) {
            this.addScore(img)
        } else if ((bin.name === 'blueBin') && (this.isPlastic(img.name))) {
            this.addScore(img)
        } else if ((bin.name === 'greenBin') && (this.isCompost(img.name))) {
            this.addScore(img)
        } else {
            img.disableBody(true, true);
            this.destroyHealth();
            score -= 1;
            scoreText.setText('Score: ' + score);
        }
    }
    // Destroys the health if the wrong trash is entered

    destroyHealth(){
        if(healthDecreased === 2){
            healthBar.destroy();
            healthBar = this.add.image(50, 100, 'noHeart');
            healthBar.setScale(2.3);
            this.gameOver();
        } else if (healthDecreased === 1) {
            healthBar.destroy();
            healthBar = this.add.image(50, 100, 'oneHeart');
            healthBar.setScale(2.3);
            healthDecreased +=1;
        } else {
            healthBar.destroy();
            healthBar = this.add.image(50, 100, 'twoHeart');
            healthBar.setScale(2.3);
            healthDecreased +=1;
        }
    }


    gameOver(){
        this.scene.start('GameOver');
        // this.scene.pause();

    }
    //
    // onObjectClicked(pointer,gameObject)
    // {
    //     this.bgmusic.pause();
    // }

    create() {

        gameWidth = game.config.width;
        gameHeight = game.config.height;

        // Creates border for trash to bounce off of
        border = this.physics.add.sprite(gameWidth / 2.3, 50, 'border');
        border.setScale(0.5);
        border.body.immovable = true;
        border.body.moves = false;

        // creates the music
        this.bgmusic = this.sound.add('bgmusic');
        this.bgmusic.play();


        // Creates the pause button image
        muteButton = this.add.sprite(250, 250, 'muteButton');

        // Creates the background image
        backGroundImg = this.backGround = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
        backGroundImg = this.backGround.setDisplaySize(gameWidth, gameHeight);

        // Creates the score bar
        scoreText = this.add.text(10, 20, 'Score:' + score, {
            fontSize: '25px',
            color: 'black',
            fontFamily: 'Courier',
        });


        popSound = this.pop = this.sound.add('pop');
        // this.pop.play();
        // Creates the images on the page

        // Creates the mute button onto the page
        muteButton = this.physics.add.sprite(250,250,'pizzaBox');


        // Creates the black bin
        blackBin = this.physics.add.sprite(gameWidth / 8, gameHeight - 50, 'blackBin');
        blackBin.setScale(gameWidth / 9000);
        blackBin.name = 'blackBin';

        // Creates the yellow bin
        yellowBin = this.physics.add.sprite(gameWidth / 2.7, gameHeight - 50, 'yellowBin');
        yellowBin.setScale(gameWidth / 9000);
        yellowBin.name = 'yellowBin';

        // Creates  the grey bin
        greyBin = this.physics.add.sprite(gameWidth / 1.6, gameHeight - 50, 'greyBin');
        greyBin.setScale(gameWidth / 9000);
        greyBin.name = 'greyBin';

        // Creates the blue bin
        blueBin = this.physics.add.sprite(gameWidth / 1.14, gameHeight - 50, 'blueBin');
        blueBin.setScale(gameWidth / 9000);
        blueBin.name = 'blueBin';

        // Creates the bin to be draggable
        yellowBin.setInteractive();
        greyBin.setInteractive();
        blackBin.setInteractive();
        blueBin.setInteractive();

        // Allows users to drag the bins
        this.input.setDraggable(greyBin);
        this.input.setDraggable(blackBin);
        this.input.setDraggable(blueBin);
        this.input.setDraggable(yellowBin);

        // Creates the ground image to hold the items
        groundImg = this.physics.add.sprite(gameWidth / 1.14, gameHeight / 8, 'ground');
        groundImg.setScale(0.5);
        groundImg.body.immovable = true;
        groundImg.body.moves = false;


        // Creates the health bar
        healthBar = this.add.image(50, 100, 'health');
        healthBar.setScale(2.3);

        // Creates the middle bin
        greenBin = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.5, 'greenBin');
        greenBin.setScale(gameWidth / 4500);
        greenBin.name = 'greenBin';

        greenBin.setInteractive();
        this.input.setDraggable(greenBin);


        // List of all the trash variables.
        trashList = [beerBottleImg, detergentImg, boardBoxImg, bagImg, jarImg, milkImg,
            newsPaperImg, tinCanImg, pizzaBoxImg, mugImg, plasticBagImg, treeBranchImg];

        // List of all the bins.
        binList = [greenBin, greyBin, blueBin, blackBin, yellowBin];

        paperList = [boardBoxImg, bagImg];

        // Lets trash objects collide with invisible wall
        for (let i = 0; i < trashList.length; i++) {
            trashList[i] = this.physics.add.sprite(gameWidth - 50, 0, itemList[i]);
            trashList[i].name = itemList[i];
            trashList[i].setScale(gameWidth / 450);
            trashList[i].body.setVelocityX(Math.random() * -1000);
            trashList[i].setGravity(0, Math.random() * 100);
            trashList[i].setCollideWorldBounds(true);
            trashList[i].setBounce(0.4);

            // this.physics.add.collider(trashList[i], border);
            this.physics.add.collider(trashList[i], groundImg);
        }

        for (let i = 0; i < binList.length; i++) {
            for (let j = 0; j < trashList.length; j++) {
                this.physics.add.overlap(binList[i], trashList[j], this.collectGarbage, null, this);
                binList[i].setCollideWorldBounds(true);
            }
        }



    }

    update(time, delta) {

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        //  Toggles the sound of the game to on or off
        muteButton.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                if (musicOn) {
                    muteButton.destroy();
                    this.bgmusic.pause();
                    musicOn = false;
                    muteButton = this.add.sprite(250, 250, 'pizzabox');

                } else {
                    this.bgmusic.resume();
                    musicOn = true;
                    muteButton = this.add.sprite(250, 250, 'muteButton');

                }
            }, this);

    }
}