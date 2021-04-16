class paper{
   
    constructor(x,y,radius) {
        
          var options=
          {
            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
   
        
    }
    
    this.body = Bodies.circle(x,y,radius/2,options);
    World.add(world,this.body);
    this.radius = radius;
   // this.image = loadImage;

 }

 display(){

    var paperpos=this.body.position;		

    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    ellipse(0,0,this.radius, this.radius);
    pop()
     
     //image(this.image,400,1200);
 }
}