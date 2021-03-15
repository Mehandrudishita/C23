class Ground{
 constructor(x,y,width,height){
     this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})
     World.add(world,this.body);
     this.width = width;
     this.height = height;
 }
 display(){
     var position = this.body.position;
     fill("white")
     rectMode(CENTER);
     rect(position.x,position.y,this.width,this.height);
     
 }
}