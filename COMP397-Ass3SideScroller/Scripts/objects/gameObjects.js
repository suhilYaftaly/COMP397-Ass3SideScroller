//Source File:       gameObjects.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the game objects  behaviours
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //game objects class +++++++++++++++++++++++++++++
    var gameObjects = (function (_super) {
        __extends(gameObjects, _super);
        //CONSTRUCTOR
        function gameObjects(imageString) {
            _super.call(this, imageString);
            this.isColliding = false;
            this.soundString = "";
            this.name = "";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        return gameObjects;
    })(createjs.Bitmap);
    objects.gameObjects = gameObjects;
})(objects || (objects = {}));
//# sourceMappingURL=gameobjects.js.map