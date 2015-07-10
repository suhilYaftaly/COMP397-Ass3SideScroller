//Source File:       background.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels background behaviours
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //background class +++++++++++++++++++++++++++++
    var background = (function (_super) {
        __extends(background, _super);
        //CONSTRUSTOR
        function background(imageString) {
            _super.call(this, imageString);
            this.dx = 4;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        //PRIVATE METHODS +++++++++++++++++
        background.prototype.checkBounds = function () {
            //check if background has left screen
            if (this.x <= -1958) {
                this.reset();
            }
        };
        background.prototype.reset = function () {
            this.y = 0;
            this.x = -0; //reset background off screen
        };
        //PUBLIC METHODS +++++++++++++++++        
        background.prototype.update = function () {
            this.x -= this.dx; //move background to the left of stage
            this.checkBounds();
        };
        return background;
    })(createjs.Bitmap);
    objects.background = background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map