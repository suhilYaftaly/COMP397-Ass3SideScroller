//Source File:       coinSilver.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the silver coin behaviours
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //silver coin class +++++++++++++++++++++++++++++
    var CoinSilver = (function (_super) {
        __extends(CoinSilver, _super);
        //CONSTRUSTOR
        function CoinSilver(imageString) {
            _super.call(this, imageString);
            this.name = "coinSilver";
            this.soundString = "PickupCoin";
            this.dx = 4.5;
            this.reset();
        }
        //PRIVATE METHODS +++++++++++++++++
        CoinSilver.prototype.checkBounds = function () {
            //check if coin has left screen
            if (this.x <= -this.width) {
                this.reset();
            }
        };
        CoinSilver.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 526); //start coin at random location
            this.x = 780 + this.width; //start coin off stage
        };
        //PUBLIC METHODS +++++++++++++++++        
        CoinSilver.prototype.update = function () {
            this.x -= this.dx; //move coin to the left of stage
            this.checkBounds();
        };
        return CoinSilver;
    })(objects.gameObjects);
    objects.CoinSilver = CoinSilver;
})(objects || (objects = {}));
//# sourceMappingURL=coinsilver.js.map