import axios from "axios"
import { useEffect, useState } from "react"
import { SokhanBozorgan } from "../tools/interfaces"

const Bozorgan = () => {
    const [ sokhan , setSokhan ] = useState<SokhanBozorgan>()
    useEffect(()=>{
        const getSokhan = async () => {
            const result = await axios.get("https://one-api.ir/sokhan/?token=640504:66cc87985ca70&action=random")
            setSokhan(result.data.result)
        }
        
        getSokhan()
    },[])
    useEffect(()=>{
        console.log(sokhan)
    },[])
  return (
    <div className="p-3 text-center">
        <h4 className=" mb-4 text-2xl">هر وقت بیای اینجا میتونی روزت رو با یه حرف قشنگ بسازی...</h4>
        <p className="mb-4 text-xl">{sokhan?.text}</p>
        <p>{sokhan?.author}</p>
    </div>
  )
}

export default Bozorgan