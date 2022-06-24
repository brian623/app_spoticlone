import axios from "axios"
import {apiUrl} from "../globalVaribles"
const getChannelById=(setChannel:any,id:any)=>{
    axios.get(`${apiUrl}/channels/${id}`)
    .then((res)=>{
        console.log(res)
        setChannel(res.data.body.channel)
    })
    .catch((err)=>{
        console.log(err)
    })
    
    }
export default getChannelById