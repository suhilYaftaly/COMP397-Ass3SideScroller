module objects {
    //icon class +++++++++++++++++++++++++++++
    export class coins extends createjs.Bitmap {
        // PUBLIC PROPERTIES
        width: number;
        height: number;
        dx: number = 5;

        //CONSTRUSTOR
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.reset();

        }
        //PRIVATE METHODS +++++++++++++++++
        private checkBounds(): void{
        }

        private reset(): void{
            this.y = Math.floor(Math.random() * 300);//start coin at random location
            this.x = -this.height;//start coin off stage
        }

        //PUBLIC METHODS +++++++++++++++++        
        public update(): void {
            this.x += this.dx; //move coin to the left of stage
        }
    }
}  