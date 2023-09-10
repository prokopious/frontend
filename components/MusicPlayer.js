"use client"
import AudioPlayer from 'react-h5-audio-player';

import './styles.css';
import { useState, useEffect } from 'react'
import styles from './MusicPlayer.module.css'

export default function MusicPlayer({ title, data }) {


  const [track, setTrack] = useState("");
  const [trackName, setTrackName] = useState("");
  const [d, setD] = useState(data);



  const getTrack = (trackTitle) => {
    let obj = d.find(o => o.public_id === trackTitle);
    setTrackName(trackTitle)
    return obj.url;
  }


  return (
    <div className={styles.player}>
      <div className={styles.track}>Podcast Episodes</div>
      <div className={styles.tracklist}>

        {data.map((item) => {

          return (
            <div className={trackName !== "" && trackName == item.public_id ? styles.bBox : styles.bBox2}>
              <button className={styles.buton} onClick={() => setTrack(getTrack(item.public_id))}>
                {item.public_id}
              </button>
            </div>
          )
        })}
      </div>
      <AudioPlayer
        src={track}
        onPlay={e => console.log("onPlay")}
      />


    </div>
  )

}