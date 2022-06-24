import axios from "axios"
import {apiUrl} from "../globalVaribles"
const getChanelsRecomended=(setRecomendedChannels:any)=>{
    axios.get(`${apiUrl}/channels/recommended`)
    .then((res)=>{
        console.log(res)
        setRecomendedChannels(res.data.body)
    })
    .catch((err)=>{
        console.log(err)
    })
    
    }
export default getChanelsRecomended