import React, {useState, useEffect} from 'react';
import Nav from "./Nav";
import Search from "./Search";
import Results from "./Results";
import Pagination from "./Pagination";
import MovieInfo from "./MovieInfo";

const App = () => {
    const [movies, setMovie] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [totalRes, setTotalRes] = useState(0);
    const [currPage, setCurrPage] = useState(1);
    const [chosenMovie, setChosenMovie] = useState(null);

    const key = "1f6701f4695b66698a043fb831db39e9";

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchTerm}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setMovie([...data.results]);
                setTotalRes(data.total_results);
            })
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    //pagination
    const nextPage = (pageNo) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchTerm}&page=${pageNo}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setMovie([...data.results]);
                setCurrPage(pageNo);
            })
    };
    const pages = Math.floor(totalRes / 20);

    const viewMovieInfo = (id) => {
        const filteredMovie = movies.filter(movie => movie.id === id);
        const newMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setChosenMovie(newMovie);
    };

    const goBack = () => {
        setChosenMovie(null);
    };

  return (
    <div className="App">
      <Nav/>
        {chosenMovie === null ? <>
      <Search handleSubmit={handleSubmit} handleChange={handleChange}/>
      <Results viewMovieInfo={viewMovieInfo} movies={movies}/>
      </> : <MovieInfo goBack={goBack} chosenMovie={chosenMovie}/>}
        { totalRes > 20 && chosenMovie === null ? <Pagination pages={pages} nextPage={nextPage} currPage={currPage}/> : '' }
    </div>
  );
};

export default App;
