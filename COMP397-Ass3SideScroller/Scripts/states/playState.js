var states;
(function (states) {
    var Play = (function () {
        // CONSTRUCTOR
        function Play() {
            this.main();
        }
        //PUBLIC METHODS
        //update method
        Play.prototype.update = function () {
            sky.update();
            cloud.update();
            spaceShip.update();
            coinGold.update();
            for (var bombs = 0; bombs < 3; bombs++) {
                bombImage[bombs].update();
                collision.check(bombImage[bombs]);
            }
            collision.check(coinGold);
            scoreboard.update();
        };
        // Our Main Game Function
        Play.prototype.main = function () {
            //add main game container
            game = new createjs.Container();
            //background reference
            sky = new objects.background(assets.getResult("sky"));
            //cloud reference
            cloud = new objects.coins(assets.getResult("cloud"));
            //spaceShip reference
            spaceShip = new objects.icon(assets.getResult("spaceShip"));
            //coin reference
            coinGold = new objects.coins(assets.getResult("coinGold"));
            //adding all references to the stage
            game.addChild(sky, cloud, coinGold, spaceShip);
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