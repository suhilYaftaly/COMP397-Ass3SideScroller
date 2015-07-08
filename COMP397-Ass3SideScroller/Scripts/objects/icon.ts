module objects {
    //spaceShip class +++++++++++++++++++++++++++++
    export class icon extends objects.gameObjects {    
        //CONSTRUSTOR
        constructor(imageString: string) {
            super(imageString);
            this.soundString = "spaceShipSound";
            
            this.x = 100;
        }

        //PUBLIC METHODS +++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; //position under mouse
        }
    }
} 