import { AiOutlineCheck } from "react-icons/ai";
import { ImBin } from "react-icons/im";
const ListItems = ({text , deleteTodo  , isChecked , toggleChecked}) => {
  return (
    <div className=" flex items-center px-4 w-full mb-5">
        <div onClick={toggleChecked} className={` ${isChecked ? "h-6 w-6 rounded-5xl bg-purple-700 border border-purple-500 cursor-pointer me-2 flex items-center justify-center text-white": "h-6 w-6 rounded-5xl bg-purple-700 border border-purple-500 cursor-pointer me-2 flex items-center justify-center text-white bg-transparent" } `}>
            {isChecked && <AiOutlineCheck />}
        </div>
        <div className={`${isChecked? "text-white flex-1 border-b border-bordercol ps-2 text-right line-through text-black": "text-white flex-1 border-b border-bordercol ps-2 text-right"}  `}>
            {text}
        </div>
        <div className=" cursor-pointer text-purple-700 px-1" onClick={deleteTodo}>
            <ImBin />
        </div>
    </div>
  )
}

export default ListItems