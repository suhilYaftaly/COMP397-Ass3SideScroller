module objects {
    //background class +++++++++++++++++++++++++++++
    export class background extends createjs.Bitmap {
        // PUBLIC PROPERTIES
        width: number;
        height: number;
        dx: number = 4;

        //CONSTRUSTOR
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            
            this.reset();
        }
        //PRIVATE METHODS +++++++++++++++++
        private checkBounds(): void {
            //check if background has left screen
            if (this.x <= -1958) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = 0; 
            this.x = -0;//reset background off screen
        }

        //PUBLIC METHODS +++++++++++++++++        
        public update(): void {
            this.x -= this.dx; //move background to the left of stage
            this.checkBounds();
        }
    }
}   