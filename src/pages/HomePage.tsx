import { useEffect, useState } from "react"
import { Todo } from "../tools/interfaces"
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import Bozorgan from "../components/Bozorgan";
import DolarTala from "../components/DolarTala";
import Notif from '../assets/notif.svg';
import User from '../assets/user.svg'
import Search from '../assets/search.svg';

const HomePage = () => {
  const [ allTodos , setAllTodos ] = useState<Todo[]>([])
  const [ jobStatus , setJobStatus ] = useState("all")

  useEffect(()=> {
    const stored = localStorage.getItem("todo");
    if (stored){
      setAllTodos(JSON.parse(stored));
  }  
    console.log(jobStatus);
},[jobStatus])
  useEffect(()=>{
    if(jobStatus === "all"){
      const stored = localStorage.getItem("todo");
      if (stored){
        setAllTodos(JSON.parse(stored));
      }
    }else if (jobStatus === "completed"){
      const stored = localStorage.getItem("todo");
      if (stored){
        const completed = JSON.parse(stored).filter((job: { isChecked: boolean; })=> job.isChecked == true)
        setAllTodos(completed);
      }
    }else{
      const stored = localStorage.getItem("todo");
      if (stored){
        const completed = JSON.parse(stored).filter((job: { isChecked: boolean; })=> job.isChecked == false)
        setAllTodos(completed);
      }
    }
  },[jobStatus])
  return (
    <div className=" text-white h-screen w-full mx-4">
      <div className="w-full h-[5%] mt-4 rounded-xl">
        <div className="flex gap-4 items-center">
          <div className=" w-7 border rounded-full p-1 cursor-pointer">
            <img src={Notif} alt="" />
          </div>
          <div className=" w-7 border rounded-full p-1 cursor-pointer">
            <img src={User} alt="" />
          </div>
          <div className="flex cursor-pointer">
            <label htmlFor="" className=" absolute right-[20rem] top-5">
              <img src={Search} alt="" className=" w-7"/>
            </label>
            <input type="text" name="" id="" className=" relative bg-transparent border border-secondcol rounded-lg p-1" placeholder="دنبال چی می گردی" />
          </div>
        </div>
        <div>

        </div>
      </div>


      <div className="w-full h-1/4 my-5 flex gap-3">
        <div className="w-2/6  bg-[rgb(134,139,147)] rounded-xl bg-opacity-15 border border-purple-300	 shadow-4xl p-2 overflow-auto" style={{scrollbarWidth:"thin" ,scrollbarColor:"#2F293E #e0e0e0"}}>
          <div className="flex justify-between">
          <h2 className="text-center mb-2 font-bold text-xl">لیست کار ها</h2>
          <select name="" id="" className="h-8 text-secondcol bg-transparent rounded-lg border border-secondcol" onChange={(e) => setJobStatus(e.target.value)}>
            <option value="all">همه</option>
            <option value="completed">انجام شده</option>
            <option value="uncompleted">انجام نشده</option>
          </select>
          </div>
          <p className="text-center mb-2">برای مدیریت کارات برو 
            <span className="text-purple-400 hover:text-purple-600">
            <Tooltip  title="تودو لیست خونه" placement="top-start" arrow enterDelay={200} leaveDelay={100}>
              <Link to="/todo-page"> تودولیست خونه</Link>
            </Tooltip>
            </span></p>
          <div>
            {
              
                allTodos.map(todo =>(
                 <div key={todo.id} className="flex gap-4 mb-1 justify-around">
                  <p>{todo.text}</p>
                  {todo.isChecked ? <p className=" text-green-600">انجام شده</p> : <p className="text-red-600">باید انجامش بدی</p>}
                 </div>
                ))
             
            }
          </div>
        </div>
        <div className="w-3/5  bg-custom-gradient rounded-xl p-2">
            <Bozorgan />
        </div>
        <div className="w-1/4 bg-[rgb(134,139,147)] rounded-xl bg-opacity-15 border border-purple-300	 shadow-4xl overflow-auto p-2" style={{scrollbarWidth:"thin" ,scrollbarColor:"#2F293E #e0e0e0"}}>
            <DolarTala />
        </div>

      </div>
      <div className="w-full h-2/6 my-5 bg-purple-500">s</div>
      <div className="w-full h-1/6 my-5 bg-purple-500">s</div>
    </div>
  )
}

export default HomePage