// Configures the game window attributes
var config = {
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 0
            }
        }
    },
    // Preloads the amount of scenes
    scene: [Intro,Level1,GameOver]
};
var game = new Phaser.Game(config);
