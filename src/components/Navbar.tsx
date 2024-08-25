import  Home   from '../assets/home.svg'
import Chart from '../assets/chart.svg'
import Logo from '../assets/logo.svg'
import Bag from '../assets/bag.svg'
import Exit from '../assets/exit.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className=' flex p-1 h-screen flex-col justify-between border-e border-secondcol border-opacity-25	 w-10'>
        <div>
            <Link to="/">
                <img className=' w-9 mb-24 mt-2 cursor-pointer' src={Logo} alt="" />
            </Link>
            <Link to="/">
                <img className=' w-9 mb-3 cursor-pointer' src={Home} alt="" />
            </Link>
            <Link to='/crypto'>
                <img className=' w-9 mb-3 cursor-pointer' src={Chart} alt="" />
            </Link>
            <Link to='/todo-page'>
                <img className=' w-9 cursor-pointer' src={Bag} alt="" />
            </Link>
        </div>
        <div>
            <img className=' w-9 mb-2 cursor-pointer' src={Exit} alt="" />
        </div>
    </nav>
  )
}

export default Navbar