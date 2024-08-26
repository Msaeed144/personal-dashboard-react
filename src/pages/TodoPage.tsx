import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ListItems from '../components/ListItems';
import { useEffect , FormEvent , MouseEvent , useRef  } from 'react';
import {v4 as uuidv4} from 'uuid'
import { Todo, TodoPageProps } from '../tools/interfaces';
 
  const TodoPage: React.FC<TodoPageProps> = ({ todo, setTodo, allTodos, setAllTodos , toggleChecked , deleteTodo}) => {

    const isInitialMount = useRef(true);
    const addTodo = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLDivElement>)=>{
        e.preventDefault()

        const todoItem :Todo = {
            id: uuidv4(),
            text: todo,
            isChecked:false,
        }
        if (todo !== ""){
            setAllTodos(prevTodos => [...prevTodos, todoItem]);
            setTodo("")
        }
    }
    const getAllTodos = () => {
        const stored = localStorage.getItem("todo");
        if (stored){
            setAllTodos(JSON.parse(stored));
        }
    }


    useEffect(()=>{
        getAllTodos()
    },[])
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            localStorage.setItem('todo', JSON.stringify(allTodos));
        }
    }, [allTodos]);
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