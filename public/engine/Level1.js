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
var score = 0;
var scoreText;
var beerBottle;
var popSound;

class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1'
        });
    }
    preload() {

        // Loads all the audio files
        this.load.audio('bgmusic',['audio/music.mp3']);
        this.load.audio('pop',['audio/pop.mp3']);

        // loads all the recycling bins
        this.load.image('greyBin','images/greybin1.png');
        this.load.image('blueBin','images/bluebin1.png');
        this.load.image('yellowBin','images/yellowbin1.png');
        this.load.image('redBin','images/redbin1.png');
        this.load.image('greenBin','images/greenbin1.png');

        this.load.image('ground', 'images/platform.png');
        this.load.image('bg', 'images/backGround.gif');

        // loads all the garbage
        this.load.image('bags', 'images/bags.png');
        this.load.image('detergent', 'images/detergent.png');
        this.load.image('beerBottle','images/beerbottle.png');
        this.load.image('boardBox', 'images/cardboardbox.png');
        this.load.image('trash','images/trash.png');


    }



    collectGarbage(bin, img){
        img.disableBody(true, true);
        console.log("Bob is here");
        score += 10;
        popSound.play();
        // scoreText.setText('Score: ' + score);
    }



    create() {
        gameWidth = game.config.width;
        gameHeight = game.config.height;
        // this.cameras.main.setBackgroundColor('#00BFFF');
        // creates the music
        // this.bgmusic = this.sound.add('bgmusic');
        // this.bgmusic.play();

        // Creates the background image
        this.backGround = this.add.image(gameWidth/2,gameHeight/2,'bg');
        this.backGround.setDisplaySize(gameWidth,gameHeight);


        popSound = this.pop = this.sound.add('pop');
        // this.pop.play();
        // Creates the images on the page
        redBin = this.add.image(gameWidth / 8, gameHeight - 50,'redBin');
        redBin.setScale(0.05);
        yellowBin = this.add.image(gameWidth / 2.7, gameHeight - 50,'yellowBin');
        yellowBin.setScale(0.05);
        greyBin = this.add.image(gameWidth / 1.6, gameHeight - 50,'greyBin');
        greyBin.setScale(0.05);
        blueBin = this.add.image(gameWidth / 1.14, gameHeight - 50,'blueBin');
        blueBin.setScale(0.05);
        groundImg = this.add.image(600,100,'ground');
        groundImg.setScale(1);


        // Creates the middle bin
        greenBin = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.5,'greenBin');
        greenBin.setScale(0.1);

        // Creates cardboard box image
        boardBoxImg = this.physics.add.sprite(gameWidth / 2, 50, 'boardBox');
        boardBoxImg.setScale(0.5);
        boardBoxImg.setGravity(0,50);

        // Creates the falling trash on the page
        trashImg = this.physics.add.sprite(gameWidth / 2, 50,'trash');
        trashImg.setScale(0.5);
        trashImg.setCollideWorldBounds(true);
        trashImg.setGravity(0,100);

        // Creates bag sprite
        bagImg = this.physics.add.sprite(gameWidth / 2, 50,'bags');
        bagImg.setScale(0.9);
        bagImg.setCollideWorldBounds(true);
        bagImg.setGravity(0,150);

        // Creates detergent sprite
        detergentImg = this.physics.add.sprite(gameWidth / 2, 50,'detergent');
        detergentImg.setScale(0.9);
        detergentImg.setCollideWorldBounds(true);
        detergentImg.setGravity(0,200);

        //Create beer bottle sprite
        beerBottle = this.physics.add.sprite(gameWidth / 2, 50,'beerBottle');
        beerBottle.setScale(0.9);
        beerBottle.setCollideWorldBounds(true);


        // this.aGrid = new AlignGrid({scene:this,rows:11,cols:11});
        // this.aGrid.showNumbers();
        //Adds the collider for the objects



    }

    update(time, delta) {
        this.physics.add.overlap(greenBin, trashImg,this.collectGarbage, null, this);
        this.physics.add.overlap(greenBin, bagImg,this.collectGarbage, null, this);
    }
}