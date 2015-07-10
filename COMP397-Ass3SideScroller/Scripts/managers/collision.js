//Source File:       collision.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the collision between objects
var managers;
(function (managers) {
    var Collision = (function () {
        //CONSTRUCTOR +++++++++++++
        function Collision() {
        }
        //PUBLIC METHODS +++++++++++++++++++
        //check collision between objects
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = spaceShip.x;
            p1.y = spaceShip.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((spaceShip.height * 0.5) +
                (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.soundString);
                    if (gameObject.name == "bomb") {
                        scoreboard.lives--;
                    }
                    if (gameObject.name == "coin") {
                        scoreboard.score += 100;
                    }
                    if (gameObject.name == "coinSilver") {
                        scoreboard.score += 70;
                    }
                    if (gameObject.name == "coinBronze") {
                        scoreboard.score += 50;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map