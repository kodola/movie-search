import React from "react";

const Search = (props) => {
    return (
        <div className="container">
            <div className="row my-5 justify-content-start">
                <section className="col-md-4 offset-md-4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input">
                            <input
                            placeholder="Search movie..." type="text" onChange={props.handleChange}
                            />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
};

export default Search;