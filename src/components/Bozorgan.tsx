import axios from "axios"
import { useEffect, useState } from "react"
import { SokhanBozorgan } from "../tools/interfaces"

const Bozorgan = () => {
    const [ sokhan , setSokhan ] = useState<SokhanBozorgan>()
    useEffect(()=>{
        const getSokhan = async () => {
            const result = await axios.get("https://one-api.ir/sokhan/?token=640504:66d94f859e0be&action=random")
            setSokhan(result.data.result)
        }
        
        getSokhan()
    },[])
    useEffect(()=>{
        console.log(sokhan)
    },[])
  return (
    <div className="p-3 text-center">
        <h4 className=" text-xl font-extrabold">هر وقت بیای اینجا میتونی روزت رو با یه حرف قشنگ بسازی...</h4>
        <hr  className=" w-2/3 text-center mx-auto my-2 border-yellow-400"/>
        <p className="mb-4 text-sm">{sokhan?.text}</p>
        <p>{sokhan?.author}</p>
    </div>
  )
}

export default Bozorgan