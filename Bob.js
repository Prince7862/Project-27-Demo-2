class Bob{
    constructor(x,y,r){
    var options = {
    isStatic:false,
    restitution:1,
    friction:0.5,
    density:0.2
    }
    this.body = Bodies.circle(x,y,r,options);
    this.radius = r;
    World.add(world,this.body);
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        // When you pushing your code it is forcing the commands and then you are poping the code out.
        // When you are pushing for a choice at the vending machine it is the same way of explaining the push.
        // Same thing for the pop but it is getting out the results.
        push();
        translate(pos.x,pos.y);
        //translate is a command used to change the x and y coordinate of an object.
        rotate(angle);
        // helps you rotate the angle of an object.
        fill("Pink");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
        }
    }