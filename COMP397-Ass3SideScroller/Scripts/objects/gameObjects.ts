//Source File:       gameObjects.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the game objects  behaviours

module objects {
    //game objects class +++++++++++++++++++++++++++++
    export class gameObjects extends createjs.Bitmap {
        // PUBLIC PROPERTIES
        public width: number;
        public height: number;
        public isColliding: boolean = false;
        public soundString: string = "";
        public name: string = "";

        // PROTECTED PROPERTIES
        protected dx: number;
        protected dy: number;       

        //CONSTRUCTOR
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }       
    }
}   