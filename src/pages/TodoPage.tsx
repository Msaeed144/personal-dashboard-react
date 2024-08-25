import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ListItems from '../components/ListItems';

function TodoPage() {
  return (
    <div className="flex justify-center w-full mt-10 ">
        <div className="bg-thirdcol max-h-96 p-3 bg-opacity-40	shadow-3xl border border-secondcolhov rounded-lg w-5/12 text-center">
            <form className="flex flex-row-reverse items-center w-full h-10 bg-firstcol rounded-2xl overflow-hidden">
                <input type="text" className=" flex-1 outline-none border-none px-8  text-base	bg-transparent text-white"/>
                <div className="w-12 h-full bg-green-700 flex items-center justify-center text-white cursor-pointer">
                    <CreateNewFolderOutlinedIcon />
                </div>
            </form>
            <div className='h-full mt-8 overflow-auto'>
                <ListItems />
            </div>
        </div>
    </div>
  )
}

export default TodoPage