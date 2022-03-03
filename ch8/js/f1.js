class Square {
    constructor(side){
        this.side = side;
    }
    perimeter(){
        return 4 * this.side;
    }
    area(){
        return this.side**2;
    }
    diagonal(){
        return Math.sqrt(2* this.side **2).toFixed(3);
    }
    describe(){
        return "Side " + this.side + ", Perimeter:" + this.perimeter() 
        + ", Area:" + this.area() + ", Diagonal:" + this.diagonal();
    }
}

square1 = new Square(2);
console.log(square1.describe());

square2 = new Square(3);
console.log(square2.describe());

square3 = new Square(4);
console.log(square3.describe());