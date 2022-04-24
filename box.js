class Box{
    constructor(x,y,w,h){
        var options = {
            restitution:0.8,
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.width = w;
        this.height = h;
        World.add(myworld,this.body)
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this,height)
    }
}