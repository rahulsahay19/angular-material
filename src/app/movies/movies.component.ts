import { Component } from "@angular/core";

@Component({
    selector:'app-movies',
    templateUrl:'./movies.component.html'
})
export class MoviesComponent{
    movieId=1;
    movieName='Grease';
    directorName='Director A';
    addNewMovie=false;   
    movieAdditionStatus='Movie not added!';
    userEntry='dummy';
    addornot=false;
    greenOrRed=0;
    movies=[
        'Grease',
        'Die Another Day',
        'Jurassic Park',
        'Titanic',
        'Gone in Sixty Seconds'
    ]


    constructor(){
        setTimeout(()=>{
            this.addNewMovie=true;
        },3000);
        this.greenOrRed=Math.random()>0.5?0:1;
      }
    getDirectorName(){
        return this.directorName;
    }

    onMovieAdded(){
        this.addornot=true;
        this.movieAdditionStatus='Movie Added with name:-'+this.userEntry;
    }
    onUserEntry(data:Event){
        console.log(data);
        this.userEntry= (<HTMLInputElement>data.target).value;
    }
    fetchColor(){
        return this.greenOrRed===0?'red':'green';
    }
   
   
}