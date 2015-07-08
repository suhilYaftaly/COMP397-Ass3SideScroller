module objects {
    //spaceShip class +++++++++++++++++++++++++++++
    export class icon extends objects.gameObjects {    
        //CONSTRUCTOR
        constructor(imageString: string) {
            super(imageString);
            this.soundString = "spaceShipSound";

            this.x = 60;
            createjs.Sound.play(this.soundString, {"loop":-1});
        }

        //PUBLIC METHODS +++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; //position under mouse
        }
    }
} 