class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
           
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
     
      display(){
        console.log(this.body.speed)
        if(this.body.speed<5){
          super.display();
        }
        else{
          World.remove(world,this.body)
          push();
          this.Visibilty = this.Visibilty - 5
          tint(255,this.Visibilty)
          pop();
        }
      }
    };