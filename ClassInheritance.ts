class Animal{
    constructor (
        protected name : String,
        protected age : number
    ) { }
    public info() : void{
        console.log (this.name +" " +"is"+ this.age+" " + "years old");
    } 
} 
class dog extends Animal{
    private colour: string;
    constructor( name:string,age:number,colour:string){
        super(name,age);
        this.colour=colour;
    }
    public display():void{
        console.log(this.name +" " +"is"+ this.age+" " + "years old and has colour "+" "+this.colour);
    }
}
const A = new Animal("Dog",11);
A.info();
const b= new dog("bunny",11,"white");
b.display();
