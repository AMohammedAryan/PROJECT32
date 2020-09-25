class Block{
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      isStatic:false
     }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

    this.Visibility = 255;
  }

  display(){
    var angle = this.body.angle

    rectMode(CENTER);
    fill("lightBlue");

    if(this.body.speed < 3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
    else {
      World.remove(world, this.body);

      this.Visibilty = this.Visibility - 5;
    }
  }

  Score(){

    if(this.Visbilty < 0 && this.Visibility > 1005){

      score ++;
    }
  }
}