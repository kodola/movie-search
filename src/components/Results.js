import React from "react";
import Movie from "./Movie";

const Results = (props) => {
    return(
        <div className="container">
            <div className="row">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <div key={i} className="col-4 my-2">
                                <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} title={movie.title}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Results;