var image1;
var image2;
var image3;
var image4;
var image5;
class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1'
        });
    }
    preload() {
        this.load.image('bin','images/bin.png');
    }

    create() {
        this.cameras.main.setBackgroundColor('#00BFFF');
        image1 = this.add.image(100,400,'bin');
        image1.setScale(0.3);
        image2 = this.add.image(250,400,'bin');
        image2.setScale(0.3);
        image3 = this.add.image(400,400,'bin');
        image3.setScale(0.3);
        image4 = this.add.image(550,400,'bin');
        image4.setScale(0.3);
        image5 = this.add.image(700,400,'bin');
        image5.setScale(0.3);


    }
    update(time, delta) {}
}