//Source File:       mainMenu.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 12, 2015
//Description:       This is the first page of the game with the intructions and a begin game button
var states;
(function (states) {
    var MainMenu = (function () {
        function MainMenu() {
            currentState = "menu";
            this.main();
        }
        MainMenu.prototype.update = function () {
        };
        MainMenu.prototype.main = function () {
            createjs.Sound.removeAllSounds();
            game = new createjs.Container();
            //main menu multi line instructions text
            this.instructionLable = new createjs.Text("\n\n\n <--Move this avatar up or down with the mouse:\n\n\n\n\n\n <--This coin earns you 100 points:\n\n\n\n\n <--This coin earns you 70 points:\n\n\n\n\n <--This coin earns you 50 points:\n\n\n\n\n\n <--Avoid this bomb or loose life:", "20px Consolas", "#3f3f3f");
            this.instructionLable.x = 130;
            // game start instruction
            this.gameLabel = new createjs.Text(" Begin Coin Loving UFO --->", "40px Consolas", "#3f3f3f");
            this.gameLabel.y = 400;
            game.addChild(this.gameLabel, this.instructionLable);
            // start play button
            startButton = new createjs.Bitmap(assets.getResult("play"));
            startButton.x = 650;
            startButton.y = 365;
            //adding images in front of the instructions texts
            spaceShip = new objects.icon(assets.getResult("spaceShip"));
            spaceShip.x = 60;
            spaceShip.y = 50;
            coinGold = new objects.coins(assets.getResult("coinGold"));
            coinGold.x = 40;
            coinGold.y = 130;
            coinSilver = new objects.CoinSilver(assets.getResult("coinSilver"));
            coinSilver.x = 40;
            coinSilver.y = 200;
            coinBronze = new objects.CoinBronze(assets.getResult("coinBronze"));
            coinBronze.x = 40;
            coinBronze.y = 270;
            regBomb = new objects.bomb(assets.getResult("bombImage"));
            regBomb.x = 40;
            regBomb.y = 340;
            game.addChild(startButton, spaceShip, coinGold, coinSilver, coinBronze, regBomb);
            // adding event listner to play button
            startButton.on("click", this.playGame);
            startButton.on("mouseover", this.mouseOver);
            startButton.on("mouseout", this.mouseOut);
        };
        MainMenu.prototype.mouseOver = function () {
            startButton.alpha = 0.7;
        };
        MainMenu.prototype.mouseOut = function () {
            startButton.alpha = 1.0;
        };
        MainMenu.prototype.playGame = function () {
            changeState("play");
        };
        return MainMenu;
    })();
    states.MainMenu = MainMenu;
})(states || (states = {}));
//# sourceMappingURL=mainMenu.js.map