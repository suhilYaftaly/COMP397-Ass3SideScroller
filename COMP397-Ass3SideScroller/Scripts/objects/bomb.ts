module objects {
    //bomb class +++++++++++++++++++++++++++++
    export class bomb extends createjs.Bitmap {
        // PUBLIC PROPERTIES
        width: number;
        height: number;
        dx: number;
        dy: number;

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
        private checkBounds(): void {
            //check if bomb has left screen
            if (this.x <= -this.width) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = Math.floor(Math.random() * 300);//start bomb at random location
            this.x = 600 + this.width;//start bomb off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        }

        //PUBLIC METHODS +++++++++++++++++        
        public update(): void {
            this.x -= this.dx; //move bomb to the left of stage
            this.y -= this.dy; //drifts bomb right and left
            this.checkBounds();
        }
    }
}  