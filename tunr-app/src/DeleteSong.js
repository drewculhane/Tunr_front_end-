import React, { useState } from "react";
import axios from "axios";

const DeleteSong = (props) => {
    const [isDeleted, setIsDeleted] = useState(false)


    const destroy = async (link) => {
        await axios({
          url: `${link}`,
          method: "DELETE",
        });
        setIsDeleted(true);
        console.log(isDeleted);
      };
      const handleClick = async (e) => {
        const songID= props.songID;
        const url = `http://localhost:3000/songs/${songID}`;
        await destroy(url);
        window.location.reload()
      };
      return (
        <p className="del-but" onClick={handleClick}>X</p>
    )
}; 

export default DeleteSong 