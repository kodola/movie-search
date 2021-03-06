import React, {useEffect, useState} from "react";
import Rating from "./Rating";

const MovieInfo = (props) => {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=1f6701f4695b66698a043fb831db39e9&language=en-US`)
            .then(data => data.json())
            .then(data => {
                //console.log(data);
                setGenre([...data.genres])
            });
    }, []);
    const movieGenres =[];

    genre.filter(gen => {
        if (props.chosenMovie.genre_ids.includes(gen.id)) {
            movieGenres.push(gen.name);
        }
        return movieGenres;
    });
    return(
        <div className="container">
            <div className="row" onClick={props.goBack} style={{cursor: "pointer", paddingTop: 20}}>
                <span style={{marginLeft: 10, marginBottom: 5}}>⮜ Go back</span>
            </div>
            <div className="card" style={{marginBottom: 20}}>
                <div className="row">
                    <div className="col-4">
                        {
                            props.chosenMovie.poster_path === null ? <img src="https://cdn.pixabay.com/photo/2014/05/21/19/16/the-question-mark-350169_960_720.png" className="card-img-top" alt="card img" style={{width: "100%", height: 350}} /> :
                                <img src={`http://image.tmdb.org/t/p/w185${props.chosenMovie.poster_path}`} className="card-img-top" alt="card img" style={{width: "100%", height: 350}} />
                        }
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.chosenMovie.title}</h5>
                            <p className="card-text">Summary:<br/>{props.chosenMovie.overview}</p>
                            <p className="card-text">Genre: {movieGenres.join(', ')}</p>
                            <div className="card-text"><small className="text-muted">Rating:</small><br/><Rating chosenMovie={props.chosenMovie}/></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default MovieInfo;

//Rating: {props.chosenMovie.vote_average}