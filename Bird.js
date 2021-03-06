class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.image= loadImage("sprites/bird.png")
    }
    display(){
      var pos =this.body.position;
      this.body.position.y=mouseY
      this.body.position.x=mouseX
     

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };