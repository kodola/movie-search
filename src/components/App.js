import React, {useState, useEffect} from 'react';
import Nav from "./Nav";
import Search from "./Search";

const App = () => {
    const [movies, setMovie] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const key = '1f6701f4695b66698a043fb831db39e9';

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchTerm}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setMovie([...data.results])
            })
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

  return (
    <div className="App">
      <Nav/>
      <Search handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  );
};

export default App;
