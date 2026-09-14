//  @author Dylan Gregory
//  @date   9-13-2026

const movieData= [
    "Pokemon Destiny Deoxys,Animation,10,pikachu@email.com",
    "Naruto Shippuden the  Movie,Anime,8",
    "Toy Story,Animation,5,toy@email.com",
    "Moana,,2,",
    "The Dark Knight,Action,9,darkknight@email.com"
];

let movies = [];
let movieID = 0;

function Movie(title, genre, rating, reviewEmail, id)
{
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.reviewEmail = reviewEmail ;
    this.id = id;

    this.getSummary = function() {
        return this.title + " is a " + this.genre + " movie with a rating of " + this.rating;
    }

    this.isHighlyRated = function() {
        return this.rating >= 8;
    }

    this.getReviewEmail = function() {
        if (!this.reviewEmail) {
            return "none";
        } else {
            return this.reviewEmail;
        }
    }

    this.getID = function() {
        return this.id;
    }
}



for (item in movieData) {
    try {
        let parts = movieData[item].split(",");
        let [title, genre, rating, reviewEmail] = parts.map(part => part.trim());
        if (!title || !genre || !rating){
            throw new Error("Movie data is missing required fields.");
        }
        let movie = new Movie(title, genre, rating, reviewEmail, movieID);
        movies[movieID] = movie;
        movieID++;
    }
    catch (error) {
        console.error(error);
    }
}

console.table(movies);

for (movie in movies) {
    console.log(movies[movie].title);
    console.log(movies[movie].genre);
    console.log(movies[movie].rating);
    console.log(movies[movie].getReviewEmail());
    console.log(movies[movie].getID());
    console.log(movies[movie].isHighlyRated());
    console.log(movies[movie].getSummary());
}

let highlyRatedMovies = movies.filter(movie => movie.isHighlyRated());

for (movie in highlyRatedMovies) {
    console.log(highlyRatedMovies[movie].title);
}

// The log below prints a personlized message mentioning my daughters and my own favorite movie.
console.log("The Movie Pokemon Destiny Deoxys is one of my favorite movies of all times. While Moana is all my " +
    "2.5year old daughter talks about.");