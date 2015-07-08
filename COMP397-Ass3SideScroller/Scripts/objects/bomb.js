var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //bomb class +++++++++++++++++++++++++++++
    var bomb = (function (_super) {
        __extends(bomb, _super);
        //CONSTRUSTOR
        function bomb(imageString) {
            _super.call(this, imageString);
            this.name = "bomb";
            this.soundString = "Explosion";
            this.reset();
        }
        //PRIVATE METHODS +++++++++++++++++
        bomb.prototype.checkBounds = function () {
            //check if bomb has left screen
            if (this.x <= -this.width) {
                this.reset();
            }
        };
        bomb.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 526); //start bomb at random location
            this.x = 780 + this.width; //start bomb off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        };
        //PUBLIC METHODS +++++++++++++++++        
        bomb.prototype.update = function () {
            this.x -= this.dx; //move bomb to the left of stage
            this.y -= this.dy; //drifts bomb right and left
            this.checkBounds();
        };
        return bomb;
    })(objects.gameObjects);
    objects.bomb = bomb;
})(objects || (objects = {}));
//# sourceMappingURL=bomb.js.map