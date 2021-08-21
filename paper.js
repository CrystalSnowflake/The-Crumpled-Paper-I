class Paper{

    constructor(x, y, r){
        var options = {
            isStatic: false,
            density: 1.2,
            restitution: 0.3,
            friction: 0.5
        }

        //making the body
        this.x = x;
        this.y = y;
        this.r = r;
        this.paper = Bodies.circle(this.x, this.y, this.r/2, options);
        
        World.add(world, this.paper);
    }

    roll(){
        var body = this.paper.position;
        
        fill("pink")
        ellipse(body.x, body.y, this.r, this.r);
    }
}

/*class Paper { 
    constructor(x,y,r) { 
        var options = { 
            isStatic:false, 
            restitution:0.3, 
            friction:0.5, 
            density:1.2 } 
            
            this.x=x; 
            this.y=y; 
            this.r=r 
            this.body=Bodies.circle(this.x, this.y, this.r/2, options) 
            World.add(world, this.body); 
        } 
        
        display() { 
            var paperpos=this.body.position; 
            push() 
            translate(paperpos.x, paperpos.y); 
            rectMode(CENTER) 
            strokeWeight(3); 
            fill(255,0,255) 
            ellipse(0,0,this.r, this.r); 
            pop() } 
        }*/