import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  
  return (
    <header className="bg-[#1d1a1a]">
      <div className="max-w-full md:max-w-[600px] mx-auto px-8 py-4">
        <nav className="flex justify-center gap-4">
          <Link 
            to="/" 
            className={`text-sm transition-colors w-[60px] text-center leading-6 ${
              location.pathname === '/' 
                ? 'text-white font-bold' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            MAIN
          </Link>
          <span className="text-gray-700">|</span>
          
          <Link 
            to="/list" 
            className={`text-sm transition-colors w-[60px] text-center leading-6 ${
              location.pathname === '/list' 
                ? 'text-white font-bold' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            LIST
          </Link>
          
          <span className="text-gray-700">|</span>
          
          <Link 
            to="/notice" 
            className={`text-sm transition-colors w-[60px] text-center leading-6 ${
              location.pathname === '/notice' 
                ? 'text-white font-bold' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            NOTICE
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header