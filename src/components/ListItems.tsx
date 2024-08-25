import { AiOutlineCheck } from "react-icons/ai";
import { ImBin } from "react-icons/im";
const ListItems = () => {
  return (
    <div className=" flex items-center px-4 w-full">
        <div className="h-6 w-6 rounded-5xl bg-purple-700 border border-purple-500 cursor-pointer me-2 flex items-center justify-center text-white">
            <AiOutlineCheck />
        </div>
        <div className=" text-white flex-1 border-b border-bordercol ps-2 text-right ">
            تستی
        </div>
        <div className=" cursor-pointer text-purple-700 px-1">
            <ImBin />
        </div>
    </div>
  )
}

export default ListItems