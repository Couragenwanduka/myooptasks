class MovieRentingAPI{
  constructor(){
    this.movies=movies;
    this.loginArr=loginArr;
    this.userEmail= userEmail;
    this.userPassword=userPassword;
    this.userEmailInput=userEmailInput;
    this.userPasswordInput= userPasswordInput;
    this.userName= userName;
    this.currentDate= currentDate;
    this.newDate= newDate;
    this.theMovie= theMovie;
  }
 signup(){
 this.loginArr.push(this.userEmailInput);
 this.loginArr.push(this.userPasswordInput);
 
 }
 login(){
  if(this.loginArr.includes(this.userEmailInput) && this.loginArr.includes(this.userPasswordInput)){
    console.log(`welcome back ${this.userName}`)
   }else{console.log("no")}
 }
 rentMovie(){
  if(this.movies.includes(this.theMovie)){
    console.log(` ${this.theMovie} was rented by ${this.userName} on${this.newDate}`)
  }else{ console.log("the movie isn't available")}
 }
returnmovie(){
  if(this.movies.includes(this.theMovie)){
    console.log(` ${this.theMovie} was returned by ${this.userName} on${this.newDate}`)
  }
 
}

}
// Get the current date and time
const currentDate = new Date();

// Add 1 hour to the current date
const newDate = new Date(currentDate.getTime() + 60 * 60 * 1000);

const theMovie="pose"
const userName="courage"
const userEmailInput= "courageobunike@gmail.com";
const userPasswordInput= "08068090917"
const userPassword=[];
const userEmail=[];
const loginArr=[];
const movies=["pose","wednesday","young sheldon","blood&water", "adire", "lucifer","nerver have i ever","top boy","suits","flash","Baki","60 minutes","12 strong"]
const myMovie = new MovieRentingAPI(userEmailInput,userPasswordInput,movies,userPassword,userEmail);
myMovie.signup()
myMovie.login()
myMovie.rentMovie()
myMovie.returnmovie()





