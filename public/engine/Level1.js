var healthBar;
var blueBin;
var blackBin;
var greenBin;
var yellowBin;
var greyBin;
var bagImg;
var boardBoxImg;
var detergentImg;
var jarImg;
var milkImg;
var newsPaperImg;
var fishImg;
var appleImg;
var tinCanImg;
var pizzaBoxImg;
var plasticBagImg;
var treeBranchImg;
var sodaCanImg;
var waterBottleImg;
var sprayCanImg;
var wineGlassImg;
var cigImg;
var candyImg;
var mugImg;
var boneImg;
var pizzaImg;
var music;
var platforms;
var gameWidth;
var gameHeight;
var scoreText;
var score = 0;
var beerBottleImg;
var border;
var container;
var healthDecreased = 0;
var trashList;
var binList;
var muteButton;
var backGroundImg;
var lostGame = true;
var paused = false;
var musicOn = true;
var isPaper = ['boardBox', 'bags', 'newsPaper', 'pizzaBox'];
var isGlass = ['beerBottle','jar', 'sodaCan', 'sprayCan'];
var isTrash = ['plasticBag','mug','candy','cig','wineGlass'];
var isPlastic = ['detergent', 'waterBottle', 'milk','tinCan'];
var isCompost = ['treeBranch','fish','apple','bone','pizza'];
var itemList = ['beerBottle', 'detergent', 'boardBox', 'bags', 'waterBottle', 'milk', 'newsPaper',
    'tinCan', 'pizzaBox', 'mug', 'plasticBag', 'treeBranch', 'jar', 'sodaCan', 'sprayCan','fish', 'apple',
    'bone','pizza','candy','cig','wineGlass'];
var time = 2000;
var speed = 0;
var ground;
var trashCreator;

// Sub Class of Phaser Engine is created.
class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1'
        });
    }

    // Preloads the assets onto the scene
    preload() {

        // loads all the grey bin
        this.load.image('greyBin', 'images/greybin1.png');

        // loads all the blue bin
        this.load.image('blueBin', 'images/bluebin1.png');

        // loads all the yellow bin
        this.load.image('yellowBin', 'images/yellowbin1.png');

        // loads all the black bin
        this.load.image('blackBin', 'images/blackbin.png');

        // loads all the  green bin
        this.load.image('greenBin', 'images/greenbin1.png');

        // loads the health bar
        this.load.image('health', 'images/3Heart.png');

        // loads the two heart image
        this.load.image('twoHeart', 'images/TwoHeart.png');

        // loads the one heart image
        this.load.image('oneHeart', 'images/OneHeart.png');

        // loads the no heart image
        this.load.image('noHeart', 'images/ZeroHeart.png');

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

        // loads the candy image
        this.load.image('candy', 'images/candy.png');

        // loads the cigaraette image
        this.load.image('cig', 'images/cig.png');

        // loads the wine glass image
        this.load.image('wineGlass', 'images/glass.png');

        // loads the soda can image
        this.load.image('sodaCan', 'images/sodacan.png');

        // loads the spray can image
        this.load.image('sprayCan', 'images/spraycan.png');

        // loads the muted button
        this.load.image('muted', 'images/muted.png');

        // loads the not muted button
        this.load.image('notMuted', 'images/notmuted.png');

        // loads the fish image
        this.load.image('fish', 'images/fish.png');

        // loads the apple image
        this.load.image('apple', 'images/apple.png');

        // loads the bone image
        this.load.image('bone', 'images/bone.png');

        // loads the ground image
        this.load.image('ground', 'images/ground.png');

        // loads the apple image
        this.load.image('pizza', 'images/pizza.png');
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
            if (imgName === isTrash[i]) {
                return true
            }
        }
    }

    // Checks if the garbage is Plastic and returns true if it is
    isPlastic(imgName) {
        for (let i = 0; i < isPlastic.length; i++) {
            if (imgName === isPlastic[i]) {
                return true
            }
        }
    }

    // Checks if the garbage is Compost and returns true if it is
    isCompost(imgName) {
        for (let i = 0; i < isCompost.length; i++) {
            if (imgName === isCompost[i]) {
                return true
            }
        }
    }

    // Adds the score based on user interaction with the bin and garbage
    addScore(img) {
        img.destroy();
        score += 1;
        scoreText.setText('Score: ' + score);
        console.log(img.name)
    }

    // Generates a random number between the min and max bounds
    getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Generates the trash randomly while setting their gravity and velocity
    createTrash() {
        let counter = 0;
        if (lostGame) {
            speed += 100;
            var index = Math.floor(this.getRandomNumber(0, trashList.length - 1));
            console.log('index: ', index);
            trashList[counter] = this.physics.add.sprite(gameWidth - 50, 0, itemList[index]);
            trashList[counter].name = itemList[index];
            trashList[counter].setScale(gameWidth / 450);
            trashList[counter].body.setVelocityX(-300);
            trashList[counter].setGravity(0,speed);
            console.log('speed',speed);
            trashList[counter].setCollideWorldBounds(true);
            this.physics.add.collider(trashList[counter], border);
            counter++;
            this.setCollider();
        }
    }

    // Sets collider with every trash bin and every garbage item
    setCollider() {
        for (let i = 0; i < binList.length; i++) {
            for (let j = 0; j < trashList.length; j++) {
                this.physics.add.overlap(ground, trashList[j], this.collectGarbage, null, this);
                this.physics.add.overlap(binList[i], trashList[j], this.collectGarbage, null, this);
                binList[i].setCollideWorldBounds(true);
            }
        }
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
            img.destroy();
            this.destroyHealth();
            score -= 1;
            scoreText.setText('Score: ' + score);
        }
    }

    // Destroys the health if the wrong trash is entered
    destroyHealth() {
        if (healthDecreased === 2) {
            healthBar.destroy();
            healthBar = this.add.image(50, 100, 'noHeart');
            healthBar.setScale(2.3);
            this.gameOver();
        } else if (healthDecreased === 1) {
            healthBar.destroy();
            healthBar = this.add.image(50, 100, 'oneHeart');
            healthBar.setScale(2.3);
            healthDecreased += 1;
        } else {
            healthBar.destroy();
            healthBar = this.add.image(50, 100, 'twoHeart');
            healthBar.setScale(2.3);
            healthDecreased += 1;
        }

    }

    // Starts the game over scene if user loses the game
    gameOver() {
        lostGame = false;
        this.scene.start('GameOver');
    }

    // Creates all the assets onto the scene
    create() {

        gameWidth = game.config.width;
        gameHeight = game.config.height;

        // Creates border to guide the trash
        border = this.physics.add.sprite(gameWidth / 2.2, gameHeight/ 4.5, 'border');

        // Sets the scale of the border
        border.setScale(0.7);

        // Implements the border to make it immovable
        border.body.immovable = true;

        // Sets the body to immovable
        border.body.moves = false;


        // Creates the background image
        backGroundImg = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');


        // Scales the background image sizing
        backGroundImg.setDisplaySize(gameWidth, gameHeight);

        // Creates ground for trash to bounce off of
        ground = this.physics.add.sprite(gameWidth / 1.777, gameHeight / 1.001, 'ground');
        ground.setScale(gameWidth / 533.33);
        ground.body.immovable = true;
        ground.body.moves = false;

        // Creates the score bar
        scoreText = this.add.text(10, 20, 'Score:' + score, {
            fontSize: '25px',
            color: 'black',
            fontFamily: 'Courier',
        });


        // Creates the black bin
        blackBin = this.physics.add.sprite(gameWidth / 8, gameHeight - 50, 'blackBin');
        blackBin.setScale(gameWidth / 7000);
        blackBin.name = 'blackBin';

        // Creates the yellow bin
        yellowBin = this.physics.add.sprite(gameWidth / 2.7, gameHeight - 50, 'yellowBin');
        yellowBin.setScale(gameWidth / 7000);
        yellowBin.name = 'yellowBin';

        // Creates  the grey bin
        greyBin = this.physics.add.sprite(gameWidth / 1.6, gameHeight - 50, 'greyBin');
        greyBin.setScale(gameWidth / 7000);
        greyBin.name = 'greyBin';

        // Creates the blue bin
        blueBin = this.physics.add.sprite(gameWidth / 1.14, gameHeight - 50, 'blueBin');
        blueBin.setScale(gameWidth / 7000);
        blueBin.name = 'blueBin';


        // Allows the user to interact with the yellow bin
        yellowBin.setInteractive();

        // Allows the user to interact with the grey bin
        greyBin.setInteractive();

        // Allows the user to interact with the black bin
        blackBin.setInteractive();

        // Allows the user to interact with the blue bin
        blueBin.setInteractive();

        // Allows users to drag the grey bin
        this.input.setDraggable(greyBin);

        // Allows users to drag the black bin
        this.input.setDraggable(blackBin);

        // Allows users to drag the blue bin
        this.input.setDraggable(blueBin);

        // Allows users to drag the yellow bin
        this.input.setDraggable(yellowBin);


        // Creates the health bar
        healthBar = this.add.image(50, 100, 'health');

        // Sets the scale of the health bar
        healthBar.setScale(2.3);

        // Creates the middle bin
        greenBin = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.5, 'greenBin');

        // Sets the scale of the middle bin
        greenBin.setScale(gameWidth / 7000);

        // Names the bin to greenBin
        greenBin.name = 'greenBin';

        // Allow users to interact with the Green Bin
        greenBin.setInteractive();

        // Allows user to drag the green bin
        this.input.setDraggable(greenBin);


        // List of all the trash variables.
        trashList = [beerBottleImg, detergentImg, boardBoxImg, bagImg, waterBottleImg, milkImg,
            newsPaperImg, tinCanImg, pizzaBoxImg, mugImg, plasticBagImg,
            treeBranchImg, jarImg, sodaCanImg, sprayCanImg, fishImg, appleImg, boneImg, pizzaImg,
            candyImg,cigImg,wineGlassImg];

        // List of all the bins.
        binList = [greenBin, greyBin, blueBin, blackBin, yellowBin];

        //Creates random trash with time interval.
        trashCreator = setInterval(() => {
            time -= 500;
            if(time <= 500) {
                time = 500;
                this.createTrash();
            } else {
                this.createTrash();
            }
        },time);

        // Creates Mute Button
        muteButton = this.physics.add.sprite(gameWidth / 1.154, gameHeight / 20.3, 'notMuted');
        muteButton.setScale(gameWidth / 312.5);
    }

    update(time, delta) {

        // Finds the coordinates user drags the game object to
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        // Sets the mute button to interactive, allows user to toggle sound to on or off
        muteButton.setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                if (musicOn) {
                    muteButton.destroy();
                    bgMusic.pause();
                    musicOn = false;
                    muteButton = this.add.sprite(gameWidth / 1.154, gameHeight / 20.3, 'muted');
                    muteButton.setScale(gameWidth / 312.5);
                } else {
                    muteButton.destroy();
                    bgMusic.resume();
                    musicOn = true;
                    muteButton = this.add.sprite(gameWidth / 1.154, gameHeight / 20.3, 'notMuted');
                    muteButton.setScale(gameWidth / 312.5);
                }
            }, this);


    }
}



