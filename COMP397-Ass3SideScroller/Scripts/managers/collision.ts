module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++
        constructor() {
        }

        //PUBLIC METHODS +++++++++++++++++++
        //check collision between objects
        public check(gameObject: objects.gameObjects) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;

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
                }
                gameObject.isColliding = true;
            } else {
                gameObject.isColliding = false;
            }
        }
    }
} 