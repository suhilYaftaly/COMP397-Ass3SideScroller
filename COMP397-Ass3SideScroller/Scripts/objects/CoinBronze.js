//Source File:       coinBronze.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the bronze coin behaviours
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //silver coin class +++++++++++++++++++++++++++++
    var CoinBronze = (function (_super) {
        __extends(CoinBronze, _super);
        //CONSTRUSTOR
        function CoinBronze(imageString) {
            _super.call(this, imageString);
            this.name = "coinBronze";
            this.soundString = "PickupCoin";
            this.dx = 5.5;
            this.reset();
        }
        //PRIVATE METHODS +++++++++++++++++
        CoinBronze.prototype.checkBounds = function () {
            //check if coin has left screen
            if (this.x <= -this.width) {
                this.reset();
            }
        };
        CoinBronze.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 508); //start coin at random location
            this.x = 780 + this.width; //start coin off stage
        };
        //PUBLIC METHODS +++++++++++++++++        
        CoinBronze.prototype.update = function () {
            this.x -= this.dx; //move coin to the left of stage
            this.checkBounds();
        };
        return CoinBronze;
    })(objects.gameObjects);
    objects.CoinBronze = CoinBronze;
})(objects || (objects = {}));
//# sourceMappingURL=coinbronze.js.map