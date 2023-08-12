const Header = () => {

  return (
    <header className='flex justify-between px-5 py-3 bg-[#00613D]'>
      <a href="/" className='logo text-3xl font-bold py-3 text-white'>LOGO</a>
      <nav className="flex justify-between">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded">Blogs</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded">Team</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
