import React, {useState} from "react";

const Suggestions = (props) => {

    const [suggestion, setSuggestion] = useState(false);
    const showSuggestions = () => {
        setSuggestion(!suggestion);
    };

    const options = props.movies.map((movie, i) => (
        i < 5 &&
        <button className="dropdown-item" key={i} onClick={() => props.viewMovieInfo(movie.id)}>{movie.title}</button>
    ));
        return (
            <div className="input-group-append">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" onClick={showSuggestions}>Dropdown
                </button>
                <div className="dropdown-menu" style={{display: suggestion ? 'block' : 'none'}}>
                    {options}
                </div>
            </div>
        )
};

export default Suggestions;
