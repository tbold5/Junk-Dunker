var image1;
var image2;
var image3;
var image4;
var image5;
var bagImg;
var groundImg;
var trashImg;
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
        this.load.audio('bgmusic',['audio/music.mp3']);
        this.load.image('ground', 'images/platform.png');
        this.load.image('trash','images/trash.png');
        this.load.image('bin','images/bin.png');
        this.load.image('bags', 'images/bags.png');
        this.load.image('beerBottle','images/beerbottle.png');
        this.load.audio('pop',['audio/pop.mp3']);
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
        this.cameras.main.setBackgroundColor('#00BFFF');
        // creates the music
        // this.bgmusic = this.sound.add('bgmusic');
        // this.bgmusic.play();

        popSound = this.pop = this.sound.add('pop');
        // this.pop.play();
        // Creates the images on the page
        image1 = this.add.image(gameWidth / 8, gameHeight - 50,'bin');
        image1.setScale(0.1);
        image2 = this.add.image(gameWidth / 2.7, gameHeight - 50,'bin');
        image2.setScale(0.1);
        image3 = this.add.image(gameWidth / 1.6, gameHeight - 50,'bin');
        image3.setScale(0.1);
        image4 = this.add.image(gameWidth / 1.14, gameHeight - 50,'bin');
        image4.setScale(0.1);
        groundImg = this.add.image(600,100,'ground');
        groundImg.setScale(1);

        console.log('gameHeight:' , gameHeight);
        console.log('gameWidth:', gameWidth);

        // Creates the middle bin
        image5 = this.physics.add.sprite(gameWidth / 2, gameHeight / 1.5,'bin');
        image5.setScale(0.3);

        // Creates the falling trash on the page
        trashImg = this.physics.add.sprite(gameWidth / 2, 50,'trash');
        trashImg.setScale(0.5);
        trashImg.setCollideWorldBounds(true);
        trashImg.setGravity(0,100);

        // Creates bag image
        bagImg = this.physics.add.sprite(gameWidth / 2, 50,'bags');
        bagImg.setScale(0.9);
        bagImg.setCollideWorldBounds(true);
        bagImg.setGravity(0,100);


        //Create beer bottle sprite
        beerBottle = this.physics.add.sprite(gameWidth / 2, 50,'beerBottle');
        beerBottle.setScale(0.9);
        beerBottle.setCollideWorldBounds(true);

        // this.aGrid = new AlignGrid({scene:this,rows:11,cols:11});
        // this.aGrid.showNumbers();
        //Adds the collider for the objects

        this.physics.add.overlap(image5, trashImg,this.collectGarbage, null, this);
        this.physics.add.overlap(image5, bagImg,this.collectGarbage, null, this);

    }

    update(time, delta) {}
}