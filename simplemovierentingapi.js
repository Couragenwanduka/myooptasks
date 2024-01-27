// create a class that contains user info and has methods that helps users to login and signup
class userInfo{
  constructor(){
    this.userName= userName;
    this.loginArr=loginArr;
    this.userEmailInput=userEmailInput;
    this.userPasswordInput= userPasswordInput;
    }
 signup(){
    this.loginArr.push(this.userEmailInput);
    this.loginArr.push(this.userPasswordInput);
 }
 login(){
   if(this.loginArr.includes(this.userEmailInput) && this.loginArr.includes(this.userPasswordInput)){
    console.log(`welcome back ${this.userName}`)
    }else{console.log("This account isn't registered")}
 }
}
//class contains the logic for displaying, adding and finding movie for the array
class Movies{
 constructor(){
  this.movies= movies
 }
displaymovies(i){
  console.log(" These are the  list of movies that are available")
  for(i=0; i<this.movies.length; i++){ 
    console.log(this.movies[i])
    }
 }
 findmovie(value){
  let found = false;
  this.movies.forEach(element => {
  if (element === value) {
    found = true;
    console.log(value+ " is available") // Value found in the array
  } else if (element===value){
      found= false;
    console.log(value+ "is not available")
  }
});
 return found;
 }
 addmovie(value){
  this.movies.push(value);
  console.log(`"new movie alert" ${value} was added to the list`)
 }
}
// this class contains the logic for renting and returning movies with time stamps
class Renting{
  constructor(){
    this.movies= (movies);
    this.userName= userName;
    this.currentDate= currentDate;
    this.newDate= newDate;
    this.theMovie= (theMovie);
 }
rentMovie(){
    if(this.movies.includes(this.theMovie)){
      console.log(` ${this.theMovie} was rented   by ${this.userName} on ${this.newDate}`)
     }else{ console.log("the movie isn't available")}
 }
returnmovie(){
    if(this.movies.includes(this.theMovie)){
      console.log(` ${this.theMovie} was returned by ${this.userName} on ${this.newDate}`)
     } 
 }
}

// Get the current date and time
const currentDate = new Date();
// Add 1 hour to the current date
const newDate = new Date(currentDate.getTime() + 60 * 60 * 1000);

const theMovie="adire,"
const userName="courage"
const userEmailInput= "courageobunike@gmail.com";
const userPasswordInput= "08068090917"
const loginArr=[];
const movies=["pose,","wednesday,","young sheldon,","blood&water,", "adire,", "lucifer,","nerver have i ever,","top boy,","suits,","flash,","Baki,","60 minutes,","12 strong."]
const second= new Renting(theMovie)
const display= new Movies()
const myMovie = new userInfo(userEmailInput,userPasswordInput,movies);
myMovie.signup()
myMovie.login()
display.displaymovies()
display.findmovie("pose")
display.addmovie("24hour")
second.rentMovie()
second.returnmovie()





