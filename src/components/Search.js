import React, {useState} from "react";
import Suggestions from "./Suggestions";

const Search = (props) => {
    const [suggestion, setSuggestion] = useState(true);
    const hideSuggestions = () => {
        setSuggestion(!suggestion);
    };
    return (
        <div className="container">
            <div className="row my-5 justify-content-start">
                <section className="col-md-4 offset-md-4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input">
                            <input
                            placeholder="Search movie..." type="text" onChange={props.handleChange}
                            onClick={hideSuggestions}
                            />
                        </div>
                        <div style={{display: suggestion ? 'block' : 'none'}}>
                        <Suggestions movies={props.movies} searchTerm={props.searchTerm} viewMovieInfo={props.viewMovieInfo}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
};

export default Search;