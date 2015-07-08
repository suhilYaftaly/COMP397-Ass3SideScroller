module objects {
    export class ScoreBoard {
        //PUBLIC PROPERTIES ++++++++++++
        public score: number = 0;
        public lives: number = 5;

        private scoreLable: createjs.Text;
        private livesLable: createjs.Text;

        //CONSTRUCTOR ++++++++++++++++++
        constructor() {
            this.livesLable = new createjs.Text("Lives:", "30px Consolas", "#FF8C00");
            this.scoreLable = new createjs.Text("Score:", "30px Consolas", "#FF8C00");
            this.scoreLable.x = 600;
            stage.addChild(this.livesLable, this.scoreLable);
        }

        //PUBLIC METHODS ++++++++++++
        public update() {
            this.livesLable.text = "Lives: " + this.lives;
            this.scoreLable.text = "Score: " + this.score;
        }
    }
} 