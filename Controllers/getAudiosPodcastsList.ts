import axios from "axios"
import {apiUrl} from "../globalVaribles"
const getAudiosPodcastsList=(setEpisodios:any,id:any)=>{
    axios
    .get(`${apiUrl}/channels/${id}/audio_clips`)
    .then((res) => {
      console.log(res);
      setEpisodios(res.data.body.audio_clips);
    })
    .catch((err) => {
      console.log(err);
    });
    }
export default getAudiosPodcastsList