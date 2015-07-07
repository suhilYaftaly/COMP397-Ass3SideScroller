module objects {
    //icon class +++++++++++++++++++++++++++++
    export class icon extends createjs.Bitmap {
        // PUBLIC PROPERTIES
        width: number;
        height: number;

        //CONSTRUSTOR
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 100;
        }

        //PUBLIC METHODS +++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; //position under mouse
           

        }
    }
} 