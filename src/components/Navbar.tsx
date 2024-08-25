import  Home   from '../assets/home.svg'
import Chart from '../assets/chart.svg'
import Logo from '../assets/logo.svg'
import Bag from '../assets/bag.svg'
import Exit from '../assets/exit.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className=' flex p-1 h-screen flex-col justify-between border-e border-secondcol border-opacity-25	 w-8'>
        <div>
            <Link to="/">
                <img className=' w-5 mb-12 mt-2 cursor-pointer' src={Logo} alt="" />
            </Link>
            <Link to="/">
                <img className=' w-5 mb-3 cursor-pointer' src={Home} alt="" />
            </Link>
            <Link to='/crypto'>
                <img className=' w-5 mb-3 cursor-pointer' src={Chart} alt="" />
            </Link>
            <Link to='/todo-page'>
                <img className=' w-5 cursor-pointer' src={Bag} alt="" />
            </Link>
        </div>
        <div>
            <img className=' w-5 mb-2 cursor-pointer' src={Exit} alt="" />
        </div>
    </nav>
  )
}

export default Navbar