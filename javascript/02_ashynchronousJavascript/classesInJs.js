/* Classes in javascript are a way to define blueprints for creating objects */


class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    area(){
        const area = this.height*this.width;
        return area;
    }

    paint(){
        console.log("Color: "+this.color)
    }
}


let rect = new Rectangle(2,4,"red")
let area = rect.area()
console.log("Area: "+area)
rect.paint()