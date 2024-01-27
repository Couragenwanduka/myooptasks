class User{
  constructor(ID,name){
    this.ID=ID;
    this.name=name;
    this.userlist= userlist;
    this.rentedMovies=[]
  }
  addUser(ID,name){
    const newUser=  new User(ID,name);
    this.userlist.push(newUser);
    console.log(this.userlist) 

  }
}
class Movie{
  constructor(ID,title,year,genre,available=true,){
    this.ID= ID;
    this.title= title;
    this.year= year;
    this.genre= genre;
    this.available=available;
  }
}

class myMovieStore{
  constructor(){
    this.isAvailable =true;
    this.Movie= userlist1;
    
  }
  addMovie(ID,title,year,genre) {
    const newMovie = new Movie(ID,title,year,genre);
    this.Movie.push(newMovie);
    console.log(this.Movie)
  }
  rentmovie(name,value){
    if(this.isAvailable){
    const foundobject= this.Movie.find(obj=> obj.title ===value);
    if(foundobject){
      console.log( value + " " +`rented by ${name} on ${newDate}` )
    }else{
      console.log(`this isnt alavilable to rent`)
    }
    this.isAvailable=false
  } else{
    console.log(value + " "+ `has been rented out`)
  }
  }
  returnMovie(){
    console.log(`moive ${this.tile} returned`);
    this.isAvailable= true;
  }
}


// Get the current date and time
const currentDate = new Date();
// Add 1 hour to the current date
const newDate = new Date(currentDate.getTime() + 60 * 60 * 1000);
const userlist1=[]
const userlist=[]
const movieStore= new myMovieStore()
const userSignUp=new User()
userSignUp.addUser(1,"courage","cjagbavcjg")
userSignUp.addUser(2,"courage","cjagbavcjg")
movieStore.addMovie(2,"pose",2010,"drama");
movieStore.addMovie(1,"adire",2020,"story")
movieStore.rentmovie("courage","pose")
movieStore.rentmovie("chidi","pose")



