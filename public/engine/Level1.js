var healthBar;
var blueBin;
var redBin;
var greenBin;
var yellowBin;
var greyBin;
var bagImg;
var groundImg;
var trashImg;
var boardBoxImg;
var detergentImg;
var music;
var platforms;
var gameWidth;
var gameHeight;
var scoreText;
var score = 0;
var beerBottle;
var popSound;
var border;
var container;
var healthDecreased = 0;

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
        this.load.image('redBin', 'images/redbin1.png');
        this.load.image('greenBin', 'images/greenbin1.png');

        // loads the health bar
        this.load.image('health', 'images/3Heart.png');
        this.load.image('twoHeart', 'images/TwoHeart.png');
        this.load.image('oneHeart', 'images/OneHeart.png');
        this.load.image('noHeart', 'images/ZeroHeart.png');

        this.load.image('ground', 'images/platform.png');
        this.load.image('bg', 'images/backGround.gif');

        // loads the border
        this.load.image('border', 'images/border.png');

        // loads all the garbage
        this.load.image('bags', 'images/bags.png');
        this.load.image('detergent', 'images/detergent.png');
        this.load.image('beerBottle', 'images/beerbottle.png');
        this.load.image('boardBox', 'images/cardboardbox.png');
        this.load.image('trash', 'images/trash.png');


    }


    // Makes the garbage upon collision with bin
    collectGarbage(bin, img) {
        img.disableBody(true, true);
        console.log("Bob is here");
        score += 1000000;
        popSound.play();
        scoreText.setText('Score: ' + score);
        this.destroyHealth();

    }

    // Destorys the health if the wrong trash is entered

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
    //     gameObject.moveTo(100,500);
    // }

    create() {
        gameWidth = game.config.width;
        gameHeight = game.config.height;

        // Creates border for trash to bounce off of
        border = this.physics.add.sprite(gameWidth / 2.3 ,50,'border');
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

        redBin = this.physics.add.sprite(gameWidth / 8, gameHeight - 50, 'redBin');
        redBin.setScale(gameWidth/9000);
        yellowBin = this.physics.add.sprite(gameWidth / 2.7, gameHeight - 50, 'yellowBin');
        yellowBin.setScale(gameWidth/9000);
        greyBin = this.physics.add.sprite(gameWidth / 1.6, gameHeight - 50, 'greyBin');
        greyBin.setScale(gameWidth/9000);
        blueBin = this.physics.add.sprite(gameWidth / 1.14, gameHeight - 50, 'blueBin');
        blueBin.setScale(gameWidth/9000);

        yellowBin.setInteractive();
        greyBin.setInteractive();
        redBin.setInteractive();
        blueBin.setInteractive();

        this.input.setDraggable(greyBin);
        this.input.setDraggable(redBin);
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
        greenBin.setScale(gameWidth/4500);

        greenBin.setInteractive();
        this.input.setDraggable(greenBin);



        // Creates cardboard box image
        boardBoxImg = this.physics.add.sprite(gameWidth - 50, 0, 'boardBox');
        boardBoxImg.setScale(gameWidth / 750);
        boardBoxImg.body.setVelocityX(-1000);
        boardBoxImg.setGravity(0, 250);

        // Creates the falling trash on the page
        trashImg = this.physics.add.sprite(gameWidth - 50, 0, 'trash');
        trashImg.setScale(gameWidth / 750);
        trashImg.setCollideWorldBounds(true);
        trashImg.setGravity(0, 300);

        // Creates bag sprite
        bagImg = this.physics.add.sprite(gameWidth - 50, 0, 'bags');
        bagImg.setScale(gameWidth / 450);
        bagImg.setCollideWorldBounds(true);
        bagImg.body.setVelocityX(-1000);
        bagImg.setGravity(0, 100);


        // Creates detergent sprite
        detergentImg = this.physics.add.sprite(gameWidth - 50, 0, 'detergent');
        detergentImg.setScale(gameWidth / 450);
        detergentImg.body.setVelocityX(-1000);
        detergentImg.setCollideWorldBounds(true);
        detergentImg.setGravity(0, 2000);




        // Create beer bottle sprite
        beerBottle = this.physics.add.sprite(gameWidth - 50, 0, 'beerBottle');
        beerBottle.setScale(gameWidth / 450);
        beerBottle.body.setVelocityX(-1500);
        beerBottle.setGravity(0,2000);
        beerBottle.setCollideWorldBounds(true);

        // garbages = this.physics.add.staticGroup();
        //
        //
        // beerBottle = garbages.create(gameWidth - 50, 0, 'beerBottle').setScale(gameWidth / 450);


        this.physics.add.collider(bagImg, groundImg);
        this.physics.add.collider(bagImg,border);
        this.physics.add.collider(detergentImg,border);
        this.physics.add.collider(boardBoxImg,border);




        // creating a container for garbages
        // container = this.add.container(400,300);
        // container.add([bagImg,detergentImg]);
        // this.physics.add.collider(garbages,border);








        //Adds the collider for the objects


    }


    update(time, delta) {
        // Destorys the bins once clicked
        // this.input.on('gameobjectdown',this.onObjectClicked);


        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });
        this.physics.add.overlap(greenBin, bagImg, this.collectGarbage, null, this);
        this.physics.add.overlap(greenBin, detergentImg, this.collectGarbage, null, this);
        this.physics.add.overlap(greenBin, boardBoxImg, this.collectGarbage, null, this);




    }
}