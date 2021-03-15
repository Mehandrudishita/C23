class Box{
    constructor(x,y,width,height) {
     this.body = Bodies.rectangle(x,y,width,height,{restitution:0.8});
     World.add(world,this.body);
     this.width = width;
     this.height = height;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();//captures the new setting. 
        translate(pos.x,pos.y);//change transition of body. fIrst the position is 0,0 then translated to pos.x and pos.y
        rotate(angle);//change the angle of body
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();//reverts back to the old setting.
    }
}