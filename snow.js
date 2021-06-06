class Snowfall {
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.snow = Bodies.circle(x,y,5,options)
        this.radius = 5;
        this.image = loadImage("snow5.webp");
        World.add(world, this.snow);
    }

    updateY(){     
        if(this.snow.position.y > height){

            Matter.Body.setPosition(this.snow, {x:random(0,400), y:random(0,400)})
        }
    }

    showDrop(){
        fill("blue")
        imageMode(CENTER);
        image(this.image, this.snow.position.x, this.snow.position.y, this.radius,this.radius);
    }
}