import React from "react";

const Suggestions = (props) => {

    const options = props.movies.map((movie, i) => (
        i < 5 &&
        <button className="list-group-item list-group-item-action" key={i} onClick={() => props.viewMovieInfo(movie.id)}>{movie.title}</button>
    ));
    if (props.searchTerm !== null) {
        return (
            <div className="list-group">
                {options}
            </div>
        )
    }
    if (props.searchTerm === false ) {
        return null;
    }


};

export default Suggestions;
