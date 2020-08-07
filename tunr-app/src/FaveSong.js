import React from 'react';
import {useState, useEffect} from 'react';

function FaveSong(props) {
    const [fave, setFave]=useState(false)
    const handleFaveClick = e => {
        console.log("handling fave click");
        props.handleFaveToggle(props.song);
        setFave(!fave)
      };
 return (
    <i onClick={handleFaveClick} className="fa fa-heart" style={ fave ? {color: '#A93F55'} : {color: 'black'}}></i>
 )
}

export default FaveSong 