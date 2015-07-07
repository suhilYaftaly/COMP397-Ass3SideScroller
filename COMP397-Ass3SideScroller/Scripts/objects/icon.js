var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //icon class +++++++++++++++++++++++++++++
    var icon = (function (_super) {
        __extends(icon, _super);
        //CONSTRUSTOR
        function icon(imageString) {
            _super.call(this, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 100;
        }
        //PUBLIC METHODS +++++++++++++++++
        icon.prototype.update = function () {
            this.y = stage.mouseY; //position under mouse
        };
        return icon;
    })(createjs.Bitmap);
    objects.icon = icon;
})(objects || (objects = {}));
//# sourceMappingURL=icon.js.map