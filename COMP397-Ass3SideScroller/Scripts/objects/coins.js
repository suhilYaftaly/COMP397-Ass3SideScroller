var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //icon class +++++++++++++++++++++++++++++
    var coins = (function (_super) {
        __extends(coins, _super);
        //CONSTRUSTOR
        function coins(imageString) {
            _super.call(this, imageString);
            this.soundString = "PickupCoin";
            this.dx = 4;
            this.reset();
        }
        //PRIVATE METHODS +++++++++++++++++
        coins.prototype.checkBounds = function () {
            //check if coin has left screen
            if (this.x <= -this.width) {
                this.reset();
            }
        };
        coins.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 526); //start coin at random location
            this.x = 780 + this.width; //start coin off stage
        };
        //PUBLIC METHODS +++++++++++++++++        
        coins.prototype.update = function () {
            this.x -= this.dx; //move coin to the left of stage
            this.checkBounds();
        };
        return coins;
    })(objects.gameObjects);
    objects.coins = coins;
})(objects || (objects = {}));
//# sourceMappingURL=coins.js.map