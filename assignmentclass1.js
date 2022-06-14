console.warn("============================Class Assignment1 14-06==================================");

class Car{
    model;
    brandname;
    price;
    color;

    constructor(model,brandname,price,color){
        this.model = model;
        this.brandname = brandname;
        this.price = price;
        this.color = color;
    }
    
    allDetail(){
        console.log(`Deatils of Car :${this.model} ${this.brandname} ${this.price} ${this.color}`);
    }


}

let hondaData = new Car("","Honda" ,"90000","Black");
hondaData.allDetail();

let CarData = new Car("Verna","Honda","150000","White");
CarData.allDetail();

let bmwCar = new Car("BMW","BMW","500000","White");
bmwCar.allDetail();