import React, { useState , useRef } from 'react';
import GifList from './GifList';
import Loader from './Loader';
import axios from 'axios';
import './App.css';

function App() {
  const [gifs,setGifs] = useState([]);
  const [loading,setLoading] = useState(false);
  const searchRef = useRef();

  function handleSearchButton(e){
    const searchValue = searchRef.current.value;
    if(searchValue === '') return;
    searchRef.current.value = null;
    getGifs(searchValue);
  }

  function handleEnterPress(e){
    if(e.key === "Enter"){
      const searchValue = searchRef.current.value
      searchRef.current.value = null
      getGifs(searchValue)
    }
  }

  function getGifs(searchText){
    setLoading(true);
    const config = {headers: {
      'Content-Type': 'application/json',
      }}
    axios.get(`https://api.tenor.com/v1/search?q=${searchText}&limit=50&key=MIL04WU9DU7S`,config)//https://api.giphy.com/v1/gifs/search?api_key=fVuxA3jJilAk5PFsfkXI1lTjoiOIULFm&q=${searchText}&limit=10
      .then(res=>{
        const results = res.data.results;
        console.log(results);
        setGifs(results);
        setLoading(false);
      })
  }
  return (
    <>
      <div className="serach-container">
        <input className="search-input" type="text" placeholder="Search GIFS" autoComplete="off" ref={searchRef} onKeyDown={handleEnterPress}/>
        <button className="search-btn" onClick={handleSearchButton}>Search!</button>
      </div>
      {loading ? <Loader/> : <GifList gifs={gifs} />}
    </>
  );
}

export default App;
