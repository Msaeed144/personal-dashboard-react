import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ListItems from '../components/ListItems';
import { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function TodoPage() {
    const [ todo , setTodo ] = useState<String>("")
    const [ allTodos , setAllTodos ] = useState([])
    const addTodo = (e)=>{
        e.preventDefault()

        const todoItem = {
            id: uuidv4(),
            text: todo,
            isChecked:false,
        }
        if (todo !== ""){
            setAllTodos([...allTodos].concat(todoItem).reverse())
            setTodo("")
        }
    }
    const getAllTodos = () => {
        let stored = JSON.parse(localStorage.getItem("todo"))
        if (stored){
            setAllTodos(stored)
        }
    }
    const toggleChecked = (id) => {
        let updatedTodos = [...allTodos].map(todo => {
            if(todo.id === id ) {
                todo.isChecked = !todo.isChecked
            }
            return todo
        })
        setAllTodos(updatedTodos)
    }
    const deleteTodo = (id) => {
        const filteredTodo = allTodos.filter(todo => todo.id !== id)
        setAllTodos(filteredTodo)
    }
    useEffect(()=>{
        getAllTodos()
    },[])
    useEffect(()=>{
        localStorage.setItem('todo' , JSON.stringify(allTodos))
    },[allTodos])
  return (
    <div className="flex justify-center w-full mt-10 ">
        <div className="bg-thirdcol max-h-96 p-3 bg-opacity-40	shadow-3xl border border-secondcolhov rounded-lg w-5/12 text-center">
            <form onSubmit={addTodo} className="flex flex-row-reverse items-center w-full h-10 bg-firstcol rounded-2xl overflow-hidden">
                <input value={todo} onChange={(e) =>setTodo(e.target.value)} type="text" className=" flex-1 outline-none border-none px-8  text-base	bg-transparent text-white"/>
                <div onClick={addTodo} className="w-12 h-full bg-green-700 flex items-center justify-center text-white cursor-pointer">
                    <CreateNewFolderOutlinedIcon />
                </div>
            </form>
            <div className='h-full mt-8 overflow-auto'>
                {
                   allTodos.map(todo =>(
                    <ListItems key={todo.id} text={todo.text} isChecked={todo.isChecked} toggleChecked={() => toggleChecked(todo.id)} deleteTodo={()=>deleteTodo(todo.id)}/>
                   ))
                }
                {
                    allTodos.length === 0 && (
                        <p className='text-white text-3xl mt-6'>فعلا کاری نداری</p>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default TodoPage