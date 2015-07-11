module states {
    export class MainMenu {
        private gameLabel: createjs.Text;
        constructor() {
            currentState = "menu";
            this.main();
        }

        public update() {
        }

        private main() {

            game = new createjs.Container()

            //game name label
            this.gameLabel = new createjs.Text("Coin Loving UFO", "40px Consolas", "#3f3f3f");
            this.gameLabel.regX = this.gameLabel.getMeasuredWidth() * 0.5;
            this.gameLabel.regY = this.gameLabel.getMeasuredHeight() * 0.5;
            this.gameLabel.x = 400;
            this.gameLabel.y = 130;
            game.addChild(this.gameLabel);

            // start play button
            startButton = new createjs.Bitmap(assets.getResult("play"));
            startButton.regX = startButton.getBounds().width * 0.5;
            startButton.regY = startButton.getBounds().height * 0.5;
            startButton.x = 400;
            startButton.y = 250;

            game.addChild(startButton);

            // adding event listner to play button
            startButton.on("click", this.playGame);
            startButton.on("mouseover", this.mouseOver);
            startButton.on("mouseout", this.mouseOut);
        }

        private mouseOver() {
            startButton.alpha = 0.7;
        }

        private mouseOut() {
            startButton.alpha = 1.0;
        }

        private playGame() {
            changeState("play");
        }
    }
}  