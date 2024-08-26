import { useEffect, useState } from "react"
import { Todo } from "../tools/interfaces"
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import Bozorgan from "../components/Bozorgan";

const HomePage = () => {
  const [ allTodos , setAllTodos ] = useState<Todo[]>([])

  useEffect(()=> {
    const stored = localStorage.getItem("todo");
    if (stored){
      setAllTodos(JSON.parse(stored));
  }  
    console.log(allTodos);
},[])
  return (
    <div className=" text-white h-screen w-full mx-4">
      <div className="w-full h-[5%] bg-purple-500 mt-4 rounded-xl">

      </div>


      <div className="w-full h-1/4 my-5 flex gap-3">
        <div className="w-2/6  bg-[rgb(134,139,147)] rounded-xl bg-opacity-15 border border-purple-300	 shadow-4xl p-2 overflow-auto">
          <h2 className="text-center mb-2 font-bold text-xl">لیست کار ها</h2>
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
        <div className="w-1/4  bg-purple-500 rounded-xl p-2">s</div>

      </div>
      <div className="w-full h-2/6 my-5 bg-purple-500">s</div>
      <div className="w-full h-1/6 my-5 bg-purple-500">s</div>
    </div>
  )
}

export default HomePage