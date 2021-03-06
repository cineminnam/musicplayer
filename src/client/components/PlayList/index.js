import React from "react";
import "./styles.css";
import { PlayListSong } from "./components/PlayListSong";
import { ListTitle } from "../ListTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeadphonesAlt);

export function PlayList(props) {
  const headphoneIcon = (<FontAwesomeIcon
    icon={["fa", "headphones-alt"]}
    className="fa-headphones-alt"
  />);

  return (
      <div className="playlist">
        <ListTitle title="P L A Y L I S T" icon={headphoneIcon} textColor="black"/>
        <div className="playlist-filter">
          <div className="playlist-filter-hot" onClick={()=>props.onUpdateFilter("hot")}>H O T</div>
          <div className="playlist-filter-new" onClick={()=>props.onUpdateFilter("new")}>N E W</div>
        </div>

        <div className="playlist-content">
          {props.playlistItems.map((genre, index) => {
            return (
              <div key={index}>
                {genre.songs.map((song, index)=>{
                  return(
                    <PlayListSong 
                      key={index} 
                      songInfo={song}
                      genreName={genre.name}
                      onUpdateCurrentSong={props.onUpdateCurrentSong}
                    ></PlayListSong>
                  );
                })
                }
              </div>
            
            );
          })}
        </div>
      </div>
  );
}
