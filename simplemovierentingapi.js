class User{
  constructor(name){
    this.name=name;
    this.rentedMovies=[];
  }
}
class Movie{
  constructor(ID,title,year,genre){
    this.ID= ID;
    this.title= title;
    this.year= year;
    this.genre= genre;
    this.available=false;
  }
}

class myMovieStore{
  constructor(){
    this.Movies=[];
    
  }
  addMovie(movie) {
    this.Movies.push(movie);
    
  }
  rentmovie(ID,user){
    this.Movies.find((movie)=>{
      if(movie.ID ===ID){
        if(movie.isavaliable){
          console.log("movie is already rented");
          return;
        }
        movie.isavaliable=true;
        user.rentedMovies.push(movie);
        return;
      }
    });
  }
  returnMovie(ID,user){
    const movieindex=
    user.rentedMovies.findIndex((movie)=>movie.ID===ID);
    if(movieindex ===-1){
      console.log("movie not found");
      return;
    }
    user.rentedMovies.splice(movieindex,1);
    this.Movies.find((movie)=>{
      if(movie.ID===ID){
        movie.isavaliable=false;
        return;
      }
    });
  }
}

const movieStore= new myMovieStore()
const user1=new User("courage");
const user2=new User("chidi");
const movie1= new Movie(1,"Pose",2018,"Drama");
const movie2= new Movie(2,"Rage",2022,"Action");
movieStore.addMovie(movie1);
movieStore.addMovie(movie2);
movieStore.rentmovie(1,user1)
movieStore.rentmovie(2,user2)
//movieStore.returnMovie(1,user1);
//movieStore.returnMovie(1,user1);
console.log(user1);
console.log(user2);
console.log(movieStore.Movies);


