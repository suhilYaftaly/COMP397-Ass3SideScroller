//Source File:       scoreBoard.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class displayes scoreboard labels on the screen
var objects;
(function (objects) {
    // scoarboard class
    var ScoreBoard = (function () {
        //CONSTRUCTOR ++++++++++++++++++
        function ScoreBoard() {
            //PUBLIC PROPERTIES ++++++++++++
            this.score = 0;
            this.lives = 5;
            this.livesLable = new createjs.Text("Lives:", "30px Consolas", "#FF8C00");
            this.scoreLable = new createjs.Text("Score:", "30px Consolas", "#FF8C00");
            this.scoreLable.x = 600;
            game.addChild(this.livesLable, this.scoreLable);
        }
        //PUBLIC METHODS ++++++++++++
        ScoreBoard.prototype.update = function () {
            this.livesLable.text = "Lives: " + this.lives;
            this.scoreLable.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map