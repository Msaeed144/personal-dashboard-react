import  Home   from '../assets/home.svg'
import Chart from '../assets/chart.svg'
import Logo from '../assets/logo.svg'
import Bag from '../assets/bag.svg'
import Exit from '../assets/exit.svg'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';


function Navbar() {
  return (
    <nav className=' flex p-1 h-screen flex-col justify-between border-e border-secondcol border-opacity-25	 w-10'>
        <div>
            <Link to="/">
                <Tooltip title="داشبورد" placement="right" arrow enterDelay={200} leaveDelay={100}>
                    <img className=' w-9 mb-24 mt-2 cursor-pointer' src={Logo} alt="" />
                </Tooltip>
            </Link>
            <Link to="/">
                <Tooltip title="خونه" placement="right" arrow enterDelay={200} leaveDelay={100}>
                    <img className=' w-9 mb-7 cursor-pointer' src={Home} alt="" />
                </Tooltip>
            </Link>
            <Link to='/crypto'>
                <Tooltip title="رمز ارز دونی" placement="right" arrow enterDelay={200} leaveDelay={100}>
                    <img className=' w-9 mb-7 cursor-pointer' src={Chart} alt="" />
                </Tooltip>
            </Link>
            <Link to='/todo-page'>
                <Tooltip  title="تودو لیست خونه" placement="right" arrow enterDelay={200} leaveDelay={100}>
                    <img className=' w-9 cursor-pointer' src={Bag} alt="" />
                </Tooltip>
            </Link>
        </div>
        <div>
            <Tooltip title="!!!مگه میخوای بری" placement="right" arrow enterDelay={200} leaveDelay={100}>
                <img className=' w-9 mb-2 cursor-pointer' src={Exit} alt="" />
            </Tooltip>
        </div>
    </nav>
  )
}

export default Navbar