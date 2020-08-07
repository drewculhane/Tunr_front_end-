import React from 'react';
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import SongForm from './SongForm.js'
import DeleteSong from './DeleteSong.js'
import FaveSong from './FaveSong.js'
function App() {
  const [input, setInput] = useState({ title: "", artist: "", duration: ""});
  const [songs, setSongs] = useState([]);
  const [faves, setFaves] = useState([]);

  const handleFaveToggle = song => {
    const favesArray = [...faves];
    const songIndex = favesArray.indexOf(song);
    if (songIndex === -1) {
      favesArray.push(song);
      console.log(`Adding song ${song} to Faves`);
    } else {
      favesArray.splice(songIndex, 1);
      console.log(`Removing ${song} from faves`);
    }
    setFaves(favesArray);
  };

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`http://localhost:3000/playlists/1/songs`);
        console.log("Ideas - useEffect - response", response);
        setSongs(response.data);
      } catch (err) {
        console.error(err);
      }
    };  
    makeAPICall();
  }, [])

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(input)
    axios({
      url: `http://localhost:3000/playlists/${1}/songs`,
      method: "POST",
      data: input,
    })
    window.location.reload() 
}

  const songsArray = songs.map((song) => (
    <div className="Song-cont">
       <div className="name-and-length">
        <p className="song-title"> {song.title}</p>
        <p> {song.duration} </p>
       </div> 
       <div className="artist-and-delete">
         <p className="song-artist"> {song.artist} </p>
         <div className="delete-and-fave">
         <DeleteSong songID={song.id} />
         <FaveSong song={song}
          handleFaveToggle={handleFaveToggle}
         /> 
         </div>
       </div>
       </div>

  ))
  const favesArray = faves.map((song) => (
    <div className="Song-cont">
    <div className="name-and-length">
     <p className="song-title"> {song.title}</p>
     <p> {song.duration} </p>
    </div> 
    <div className="artist-and-delete">
      <p className="song-artist"> {song.artist} </p>
      <div className="delete-and-fave">
      <DeleteSong songID={song.id} />
      </div>
    </div>
    </div>
  ))
  return (
    <div className="App">
      <header>
        <h4>TUNR.</h4>
        <p> FOR ALL YOUR PLAYLIST NEEDS </p> 
      </header>
      <div className="Barrier"></div>
      <div className="Playls-head-cont">
        <p className="Playlist-title"> Playlist 1 </p>
      </div> 
      <div className="plylst-songs-cont">
      {songsArray}
      </div> 
      <h4 className="lower-h undrln"> Favorite Songs List</h4>
      {favesArray}
      <h4 className="lower-h bold-bold" > ADD A NEW SONG </h4>
      <SongForm
      song={input}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      /> 
      </div>
  );
}

export default App;
