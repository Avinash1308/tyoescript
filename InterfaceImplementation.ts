interface Animal{
    display(): String;
}

class dog implements Animal{
    constructor(public color: string){}
    display(){
        return this.color;
    }
}

let animal1 : Animal;

animal1 = new dog("red");
console.log(animal1.display());
