//Source File:       icon.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the games avatar character (UFO) behaviours
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //spaceShip class +++++++++++++++++++++++++++++
    var icon = (function (_super) {
        __extends(icon, _super);
        //CONSTRUCTOR
        function icon(imageString) {
            _super.call(this, imageString);
            this.soundString = "spaceShipSound";
            this.x = 60;
            createjs.Sound.play(this.soundString, { "loop": -1 });
        }
        //PUBLIC METHODS +++++++++++++++++
        icon.prototype.update = function () {
            this.y = stage.mouseY; //position under mouse
        };
        return icon;
    })(objects.gameObjects);
    objects.icon = icon;
})(objects || (objects = {}));
//# sourceMappingURL=icon.js.map