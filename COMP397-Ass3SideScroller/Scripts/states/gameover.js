var states;
(function (states) {
    var GameOver = (function () {
        function GameOver() {
            currentState = "gameover";
            this.main();
        }
        GameOver.prototype.update = function () {
        };
        GameOver.prototype.main = function () {
            game = new createjs.Container();
            // game over label
            this.gameOver = new createjs.Text("Game Over", "40px Consolas", "#3f3f3f");
            this.gameOver.regX = this.gameOver.getMeasuredWidth() * 0.5;
            this.gameOver.regY = this.gameOver.getMeasuredHeight() * 0.5;
            this.gameOver.x = 400;
            this.gameOver.y = 200;
            game.addChild(this.gameOver);
            //final score label
            this.score = new createjs.Text("Score:" + scoreboard.score.toString() + " Play again?", "40px Consolas", "#3f3f3f");
            this.score.regX = this.score.getMeasuredWidth() * 0.5;
            this.score.regY = this.score.getMeasuredHeight() * 0.5;
            this.score.x = 400;
            this.score.y = 250;
            game.addChild(this.score);
            //replay button
            this.replayButton = new createjs.Bitmap(assets.getResult("replay"));
            this.replayButton.regX = this.replayButton.getBounds().width * 0.5;
            this.replayButton.regY = this.replayButton.getBounds().height * 0.5;
            this.replayButton.x = 400;
            this.replayButton.y = 360;
            game.addChild(this.replayButton);
            // adding events to replay button
            this.replayButton.on("click", this.playAgain);
            this.replayButton.on("mouseover", this.mouseOver);
            this.replayButton.on("mouseout", this.mouseOut);
        };
        //mouse over event
        GameOver.prototype.mouseOver = function () {
            this.replayButton.alpha = 0.7;
        };
        //mouse out event
        GameOver.prototype.mouseOut = function () {
            this.replayButton.alpha = 1.0;
        };
        GameOver.prototype.playAgain = function () {
            changeState("play");
            createjs.Sound.registerSounds;
        };
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map