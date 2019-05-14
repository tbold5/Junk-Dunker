var healthBar;
var blueBin;
var blackBin;
var greenBin;
var yellowBin;
var greyBin;
var bagImg;
var groundImg;
var trashImg;
var boardBoxImg;
var detergentImg;
var jarImg;
var milkImg;
var newsPaperImg;
var tinCanImg;
var pizzaBoxImg;
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
var greenList = ['boardBoxImg', 'trashImg', 'bagImg', 'detergentImg'];
var itemList = ['beerBottle', 'detergent', 'boardBox', 'bags', 'trash', 'waterBottle', 'milk', 'newsPaper', 'tinCan', 'pizzaBox', 'mug'];
var trashList;
var binList;
var paperList;

class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1'
        });
    }
    preload() {
        // Loads all the audio files
        // this.load.audio('bgmusic', ['audio/music.mp3']);
        this.load.audio('pop', ['audio/pop.mp3']);
        // loads all the recycling bins
        this.load.image('greyBin', 'images/greybin1.png');
        this.load.image('blueBin', 'images/bluebin1.png');
        this.load.image('yellowBin', 'images/yellowbin1.png');
        this.load.image('blackBin', 'images/blackBin.png');
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

        // loads the trash image
        this.load.image('trash', 'images/trash.png');

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
    }


    // Makes the garbage upon collision with bin
    collectGarbage(bin, img) {
        if (greenList.includes('detergentImg')) {
            img.disableBody(true, true);
            score += 1;
            popSound.play();
            scoreText.setText('Score: ' + score);
            console.log(img.name)
        } else {
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

    // onObjectClicked(pointer,gameObject)
    // {
    //     var mainBin = greenBin;
    //     var clickedBin = gameObject['name'];
    //     // When red bin is clicked
    //     if (clickedBin) {
    //         gameObject.setScale(gameWidth / 4500);
    //         gameObject.x = gameWidth / 2;
    //         gameObject.y = gameHeight / 1.5;
    //         mainBin.x = gameWidth / 8;
    //         mainBin.y = gameHeight - 50;
    //         mainBin.setScale(gameWidth / 9000);
    //         mainBin = gameObject;
    //         clickedBin = greenBin;
    //         console.log('main bin: ', mainBin.name);
    //         console.log('clicked bin: ', clickedBin.name)
    //     }

    // }

    create() {
        // currentMiddleBin = greenBin;
        gameWidth = game.config.width;
        gameHeight = game.config.height;

        // Creates border for trash to bounce off of
        border = this.physics.add.sprite(gameWidth / 2.3, 50, 'border');
        border.setScale(0.5);
        border.body.immovable = true;
        border.body.moves = false;


        // creates the music
        // this.bgmusic = this.sound.add('bgmusic');
        // this.bgmusic.play();

        // Creates the background image
        this.backGround = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
        this.backGround.setDisplaySize(gameWidth, gameHeight);

        // Creates the score bar
        scoreText = this.add.text(10, 20, 'Score:' + score, {
            fontSize: '25px',
            color: 'black',
            fontFamily: 'Courier',
        });


        popSound = this.pop = this.sound.add('pop');
        // this.pop.play();
        // Creates the images on the page


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

        // Creates theb blue bin
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
        trashList = [beerBottleImg, detergentImg, boardBoxImg, bagImg, trashImg, jarImg, milkImg, newsPaperImg, tinCanImg, pizzaBoxImg, mugImg];

        // List of all the bins.
        binList = [greenBin, greyBin, blueBin, blackBin, yellowBin];

        paperList = [boardBoxImg, bagImg, trashImg];

        // Lets trash objects collide with invisible wall
        for (let i = 0; i < trashList.length; i++) {
            trashList[i] = this.physics.add.sprite(gameWidth - 50, 0, itemList[i]);
            trashList[i].name = itemList[i];
            trashList[i].setScale(gameWidth / 450);
            trashList[i].body.setVelocityX(Math.random() * -1000);
            trashList[i].setGravity(0, Math.random() * 100);
            trashList[i].setCollideWorldBounds(true);
            // trashList[i].setBounce(0.1);
            this.physics.add.collider(trashList[i], border);
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
        // Destorys the bins once clicked
        // this.input.on('gameobjectdown',this.onObjectClicked);
        //
        //
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        // for (let i = 0; i < binList.length; i++) {
        //     for (let j = 0; j < trashList.length; j++) {
        //         if (this.isPaper(trashImg)) {
        //             this.physics.add.overlap(binList[i], trashList[j], this.collectGarbage, null, this);
        //         }
        //     }
        // }



    }
}