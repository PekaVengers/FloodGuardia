import { NavLink } from "react-router-dom";
import logo from "../assets/logo.PNG";

const Header = () => {

  return (
    <header className='flex justify-between items-center px-5 bg-[#00613D]'>
      <NavLink to="/" className='logo text-3xl font-bold py-3 text-white'><img className="w-[15rem]" src={logo} /></NavLink>
      <nav className="flex justify-between">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-[2rem]">
            <li>
              <NavLink to="/" className="block py-2 pl-3 pr-4 text-white rounded" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/maps" className="block py-2 pl-3 pr-4 text-white rounded">Map</NavLink>
            </li>
            <li>
              <NavLink to="/education" className="block py-2 pl-3 pr-4 text-white rounded">Education</NavLink>
            </li>
            <li>
              <NavLink to="/donate" className="block py-2 pl-3 pr-4 text-white rounded">Donate Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
