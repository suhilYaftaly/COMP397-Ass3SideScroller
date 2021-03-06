//Source File:       gameOver.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 12, 2015
//Description:       This is the last page of the game with a score number and a button to play again
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
            replayButton = new createjs.Bitmap(assets.getResult("replay"));
            replayButton.regX = replayButton.getBounds().width * 0.5;
            replayButton.regY = replayButton.getBounds().height * 0.5;
            replayButton.x = 400;
            replayButton.y = 360;
            game.addChild(replayButton);
            // adding events to replay button
            replayButton.on("click", this.playAgain);
            replayButton.on("mouseover", this.mouseOver);
            replayButton.on("mouseout", this.mouseOut);
        };
        //mouse over event
        GameOver.prototype.mouseOver = function () {
            replayButton.alpha = 0.7;
        };
        //mouse out event
        GameOver.prototype.mouseOut = function () {
            replayButton.alpha = 1.0;
        };
        GameOver.prototype.playAgain = function () {
            changeState("play");
        };
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameOver.js.map