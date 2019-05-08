var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scale: {
        scale: 'SHOW_ALL',
        orientation: 'LANDSCAPE',
    },
    resolution: window.devicePixelRatio,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 500
            }
        }
    },
    scene: [Level1]
};

var game = new Phaser.Game(config);
