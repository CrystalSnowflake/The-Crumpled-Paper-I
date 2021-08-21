class Ground{
    constructor(){
        var options = {
            isStatic: true
        }

        //making the body
        this.ground = Bodies.rectangle(0, 600, 800, 100, options)
        this.w = 800;
        this.h = 100;
       World.add(world, this.ground)
}

display(){
    var body = this.ground.position;
    fill('white')
    rect(body.x, body.y, this.w, this.h);
}
}