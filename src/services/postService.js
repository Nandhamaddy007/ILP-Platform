import axios from "axios";

export default function postService(url,data,after){
    axios.post(url,data).then(after).catch((err)=>{
        console.log(err)
    })
}