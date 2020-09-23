class Paper {
    constructor(){
        this.body = Bodies.circle(50);
        World.add(world,this.body);
    }
    display(){
        ellipse(ball.position.x,ball.position.y,20,20);
    }
}