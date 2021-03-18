class Form{
    constructor(){
        this.title = createElement('h1');
        this.button = createElement('Play');
        this.input = createInput("Enter Name");
    }

    display(){

        this.title.html("Soccer Game");
        this.title.position(displayWidth/2-150, 300);
        this.title.style('font-size', '70px');

        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.title.style('color', 'red');
        
    }
}