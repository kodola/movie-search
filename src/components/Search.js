import React from "react";
import Suggestions from "./Suggestions";

const Search = (props) => {
    return (
        <div className="container">
            <div className="row my-5 justify-content-start">
                <section className="col-md-4 offset-md-4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-group">
                            <input className="form-control" aria-label="Text input with dropdown button"
                            placeholder="Search movie..." type="text" onChange={props.handleChange}/>
                        </div>
                        <Suggestions movies={props.movies} searchTerm={props.searchTerm} viewMovieInfo={props.viewMovieInfo}/>
                    </form>
                </section>
            </div>
        </div>
    )
};

export default Search;