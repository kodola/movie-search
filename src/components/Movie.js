import React from "react";

const Movie = (props) => {

    return (

            <div className="card-deck">
                <div className="card">
                    {
                        props.image === null ? <img src='https://cdn.pixabay.com/photo/2014/05/21/19/16/the-question-mark-350169_960_720.png' className="card-img-top" alt='card img' style={{width: '100%', height: 350}} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} className="card-img-top" alt='card img' style={{width: '100%', height: 350}} />
                    }
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <a href="#" className="btn btn-primary">Show Details</a>
                    </div>
                </div>
            </div>

    )
};
export default Movie;