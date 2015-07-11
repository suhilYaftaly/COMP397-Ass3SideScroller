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
/// <reference path="objects/coinsilver.ts" />
/// <reference path="objects/coinbronze.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/mainmenu.ts" />
/// <reference path="states/playstate.ts" />
/// <reference path="states/gameover.ts" />
//Source File:       game.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class is the main game class. It puts together all the other classes for the game to work
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
    { id: "coinSilver", src: "assets/images/coinSilver.gif" },
    { id: "coinBronze", src: "assets/images/coinBronze.gif" },
    { id: "bombImage", src: "assets/images/bombImage.gif" },
    { id: "play", src: "assets/images/play.gif" },
    { id: "replay", src: "assets/images/replay.png" },
    //sound links
    { id: "PickupCoin", src: "assets/audio/PickupCoin.wav" },
    { id: "Explosion", src: "assets/audio/Explosion.wav" },
    { id: "spaceShipSound", src: "assets/audio/spaceShipSound.wav" }
];
// Game Variables
var sky;
var spaceShip;
var cloud; //used coins class for cloud. since its just one object and same code is required.
var coinGold;
var coinSilver;
var coinBronze;
var bombImage = [];
var startButton;
//scoreboard label
var scoreboard;
//Game Managers
var collision;
//game states
var play;
var menu;
var gameOver;
var currentState = "menu";
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
    if (currentState == "play") {
        play.update();
    }
    stage.update();
    stats.end(); // end measuring
}
function changeState(state) {
    stage.removeChild(game);
    if (state == "play") {
        play = new states.Play();
        createjs.Sound.play(this.soundString, { "loop": -1 });
        createjs.Sound.registerSounds(manifest);
    }
    else if (state == "gameOver") {
        createjs.Sound.removeAllSounds();
        gameOver = new states.GameOver();
    }
    stage.addChild(game);
}
// Our Main Game Function
function main() {
    //add main game container
    menu = new states.MainMenu();
    // instantiate play state
    //play = new states.Play();
    //add game container to the stage
    stage.addChild(game);
}
//# sourceMappingURL=game.js.map