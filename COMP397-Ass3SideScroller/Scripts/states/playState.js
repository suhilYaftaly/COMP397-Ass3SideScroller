//Source File:       playState.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the way the game is played. It displayes all characters on the screen
var states;
(function (states) {
    var Play = (function () {
        // CONSTRUCTOR
        function Play() {
            currentState = "play";
            this.main();
        }
        //PUBLIC METHODS
        //update method
        Play.prototype.update = function () {
            sky.update();
            cloud.update();
            spaceShip.update();
            coinGold.update();
            coinBronze.update();
            coinSilver.update();
            for (var bombs = 0; bombs < 3; bombs++) {
                bombImage[bombs].update();
                collision.check(bombImage[bombs]);
            }
            collision.check(coinGold);
            collision.check(coinSilver);
            collision.check(coinBronze);
            scoreboard.update();
            if (scoreboard.lives <= 0) {
                changeState("gameOver");
            }
        };
        // Our Main Game Function
        Play.prototype.main = function () {
            //add main game container
            game = new createjs.Container();
            //background reference
            sky = new objects.background(assets.getResult("sky"));
            //cloud reference
            cloud = new objects.CoinSilver(assets.getResult("cloud"));
            //spaceShip reference
            spaceShip = new objects.icon(assets.getResult("spaceShip"));
            //coin references
            coinGold = new objects.coins(assets.getResult("coinGold"));
            coinSilver = new objects.CoinSilver(assets.getResult("coinSilver"));
            coinBronze = new objects.CoinBronze(assets.getResult("coinBronze"));
            //adding all references to the stage
            game.addChild(sky, cloud, coinGold, coinSilver, coinBronze, spaceShip);
            //add bombImage to the stage
            for (var bombs = 0; bombs < 3; bombs++) {
                bombImage[bombs] = new objects.bomb(assets.getResult("bombImage"));
                game.addChild(bombImage[bombs]);
            }
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            //add game container to the stage
            stage.addChild(game);
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=playstate.js.map