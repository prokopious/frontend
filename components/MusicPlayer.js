
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function MusicPlayer(source) {

  return (
    <AudioPlayer
      autoPlay
      src={source}
      onPlay={e => console.log("onPlay")}
    />
  )

}