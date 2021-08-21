class Bin{
    constructor(x, y, w, h){
        var options = {
            isStatic: true,
        }

        //making the body
        this.bin = Bodies.rectangle(x, y, w, h, options)
        this.w = w
        this.h = h
    }

    show(){
        var body = this.bin.position;
        fill('pink')
        rect(body.x, body.y, this.w, this.h);
    }
}