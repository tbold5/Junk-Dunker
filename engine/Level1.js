var image1;
var image2;
var image3;
var image4;
var image5;
var whaleImg;
var groundImg;
var trashImg;
var music;
var platforms;
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
        this.load.image('whale', 'images/whale.jpg');
    }

    create() {
        this.cameras.main.setBackgroundColor('#00BFFF');
        // creates the music
        this.bgmusic = this.sound.add('bgmusic');
        this.bgmusic.play();

        // Creates the images on the page
        image1 = this.add.image(100,450,'bin');
        image1.setScale(0.2);
        image2 = this.add.image(250,450,'bin');
        image2.setScale(0.2);
        image3 = this.add.image(400,450,'bin');
        image3.setScale(0.2);
        image4 = this.add.image(550,450,'bin');
        image4.setScale(0.2);
        image5 = this.add.image(700,450,'bin');
        image5.setScale(0.2);
        groundImg = this.add.image(600,100,'ground');
        groundImg.setScale(0.4);



        // Creates the falling trash on the page
        trashImg = this.physics.add.sprite(400,50,'trash');
        trashImg.setScale(0.5)
        trashImg.body.setGravity(300);
        trashImg.setCollideWorldBounds(true);

        whaleImg = this.add.image(800,450,'whale');
        whaleImg.setScale(0.3);
        //Adds the collider for the objects
        // this.physics.add.collider(this.trash,this.ground);


    }
    update(time, delta) {}
}