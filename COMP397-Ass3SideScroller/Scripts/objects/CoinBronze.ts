//Source File:       coinBronze.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the bronze coin behaviours

module objects {
    //silver coin class +++++++++++++++++++++++++++++
    export class CoinBronze extends objects.gameObjects {
        //CONSTRUSTOR
        constructor(imageString: string) {
            super(imageString);

            this.name = "coinBronze";
            this.soundString = "PickupCoin";
            this.dx = 5.5;
            this.reset();
        }
        //PRIVATE METHODS +++++++++++++++++
        private checkBounds(): void {
            //check if coin has left screen
            if (this.x <= -this.width) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = Math.floor(Math.random() * 508);//start coin at random location
            this.x = 780 + this.width;//start coin off stage
        }

        //PUBLIC METHODS +++++++++++++++++        
        public update(): void {
            this.x -= this.dx; //move coin to the left of stage
            this.checkBounds();
        }
    }
}   