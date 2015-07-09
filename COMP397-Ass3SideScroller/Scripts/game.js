/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/icon.ts" />
/// <reference path="objects/bomb.ts" />
/// <reference path="objects/coins.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/playstate.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var game;
var assets;
var manifest = [
    //image links
    { id: "sky", src: "assets/images/sky.png" },
    { id: "cloud", src: "assets/images/cloud.gif" },
    { id: "spaceShip", src: "assets/images/spaceShip.gif" },
    { id: "coinGold", src: "assets/images/coinGold.gif" },
    { id: "bombImage", src: "assets/images/bombImage.gif" },
    //sound links
    { id: "PickupCoin", src: "assets/audio/PickupCoin.wav" },
    { id: "Explosion", src: "assets/audio/Explosion.wav" },
    { id: "spaceShipSound", src: "assets/audio/spaceShipSound.wav" }
];
// Game Variables
//var helloLabel: createjs.Text; // create a reference
var sky;
var spaceShip;
var cloud; //used coins class for cloud. since its just one object and same code is required.
var coinGold;
var bombImage = [];
//scoreboard label
var scoreboard;
//Game Managers
var collision;
//game states
var play;
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '810px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    play.update();
    stage.update();
    stats.end(); // end measuring
}
// Our Main Game Function
function main() {
    //add main game container
    game = new createjs.Container();
    // instantiate play state
    play = new states.Play();
    //add game container to the stage
    stage.addChild(game);
}
//# sourceMappingURL=game.js.map