import axios from "axios";

export default function putService(url,data,after){
    axios.put(url,data).then(after).catch((err)=>{
        console.log(err)
    })
}