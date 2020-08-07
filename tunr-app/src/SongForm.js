import React from "react";

const SongForm = ({ song, handleSubmit, handleChange}) => {
    return (
    <form onSubmit ={handleSubmit}>
              <label> Title </label>
              <input 
              placeholder="Title"
              value={song.title}
              name="title"
              onChange={handleChange}
              /> 
              <label> Artist </label>
              <input 
              placeholder="Artist"
              value = {song.artist}
              name="artist"
              onChange={handleChange}
               />
              <label> Time </label>
              <input 
              placeholder="Duration"
              value = {song.duration}
              name = "duration"
              onChange={handleChange}
              />
              <button type="submit"> ADD NEW SONG </button>
          </form>
          )}
    
    export default SongForm 