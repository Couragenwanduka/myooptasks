// defining a  class
class courage {
  name= "Courage Nduka";
  age= 23;
  height= "6ft";
  eyecolour= "brown";
  complextion="dark skined";
  weight="90kg";
  static skills= "zero skills";
  static finacials= "broke"

  handsomeBoy(){
    console.log(`My name is ${this.name} I am ${this.age} years old, ${this.height},${this.complextion}  with ${this.eyecolour} eyes and I way ${this.weight} `)
  }
  
 static redFlags(){
    console.log(`redFlags are i have ${courage.skills} and I am currently ${courage.finacials} `)
  }

}
//instanstiate an object 
const chidi= new courage()
chidi.handsomeBoy()
courage.redFlags()
