import { useEffect, useState } from "react"
import { Todo } from "../tools/interfaces"
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import Bozorgan from "../components/Bozorgan";
import DolarTala from "../components/DolarTala";
import Notif from '../assets/notif.svg';
import User from '../assets/user.svg'
import Search from '../assets/search.svg';
import CryptoHomePage from "../components/CryptoHomePage";
import Weather from "../components/Weather";
import Calendar from "../components/Calendar";

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
            <input type="text" name="" id="" className=" relative bg-transparent border border-secondcol rounded-lg p-1 ps-3" placeholder="دنبال چی می گردی" />
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
                 <div key={todo.id} className="flex gap-4 mb-1 justify-between">
                  <p>{todo.text}</p>
                  <div>
                   {todo.isChecked ? <p className=" text-green-600 flex justify-end">انجام شده</p> : <p className="text-red-600">باید انجامش بدی</p>}
                  </div>
                 </div>
                ))
             
            }
          </div>
        </div>
        <div className="w-3/5  bg-custom-gradient rounded-xl p-2">
            <Bozorgan />
        </div>
        <div className="w-1/4 bg-[rgb(134,139,147)] rounded-xl bg-opacity-15 border border-purple-300	 shadow-4xl overflow-hidden p-2" >
            <DolarTala />
        </div>

      </div>
      <div className="w-full h-1/5my-5 bg-[rgb(134,139,147)] rounded-xl bg-opacity-15 border border-purple-200 p-2">
        <CryptoHomePage />
      </div>
      <div className="w-full h-[29%] my-5 flex gap-3">
            <div className=" h-full w-1/3 rounded-xl border border-purple-200 bg-[rgb(134,139,147)] bg-opacity-15">
              <Weather />
            </div>
            <div className=" h-full w-1/3 rounded-xl border border-purple-200 bg-[rgb(134,139,147)] bg-opacity-15 p-4">
              <h3 className=" text-center font-extrabold text-3xl mb-3 text-[#60B7FF]">توضیحات پروژه</h3>
              <p className="mb-2">
                این پروژه با ری اکت و تایپ اسکریپت زده شده و برای استایل دهی از tailwind استفاده شده همچنین از api ها برای دریافت قیمت ها و ...  استفاده شده
              </p>
              <p>
                باتشکر از وبسایت <a className="text-[#60B7FF] hover:text-[#83c3f8]" href="https://one-api.ir/"> وان سرویس</a> که از سرویس های آن در این پروژه استفاده کردم 
              </p>
            </div>
            <div className=" h-full w-1/3 rounded-xl border border-purple-200 bg-[rgb(134,139,147)] bg-opacity-15">
              <Calendar />
            </div>
      </div>
    </div>
  )
}

export default HomePage