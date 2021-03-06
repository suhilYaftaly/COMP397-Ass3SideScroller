﻿//Source File:       coin.ts
//Author:            A.Suhil M.Mohammad
//Last modified by:  A.Suhil M.Mohammad
//Date:              July 10, 2015
//Description:       This class handels the golden coin behaviours

module objects {
    //golden coin class +++++++++++++++++++++++++++++
    export class coins extends objects.gameObjects {
        //CONSTRUSTOR
        constructor(imageString: string) {
            super(imageString);

            this.name = "coin";
            this.soundString = "PickupCoin";
            this.dx = 4;            
            this.reset();
        }
        //PRIVATE METHODS +++++++++++++++++
        private checkBounds(): void{
            //check if coin has left screen
            if (this.x <= -this.width) {
                this.reset();
            }
        }

        private reset(): void{
            this.y = Math.floor(Math.random() * 526);//start coin at random location
            this.x = 780+this.width;//start coin off stage
        }

        //PUBLIC METHODS +++++++++++++++++        
        public update(): void {
            this.x -= this.dx; //move coin to the left of stage
            this.checkBounds();
        }
    }
}  