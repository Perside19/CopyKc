import '../styles/menu.css'
import logo from '../assets/Logo kimbocare.png';
import 'bootstrap/dist/css/bootstrap.css'

function Menu() {
	return (
		<nav className='kc-menu bg-white flex'>
               <div className='kc-menu-nav flex px-4 py-4 row'>
                    <div className='kc-menu-nav flex row col-5'>
                         <div className='kc-menu-logo flex-1 flex items-center gap-x-4 col-4'>
                              <a href='#'><img src={logo} alt="logo" /></a>
                         </div>
                         <div className='flex-1 flex items-center gap-x-4 col-5  d-flex justify-content-end'>
                              <a href='#' className='flex items-center rounded-full Menu-module--selected--10e17 px-2 lg:px-6'>Individuel</a>
                              <a href='#' className='flex items-center rounded-full pl-1 pr-2 lg:pl-3 lg:pr-6'>Entreprise</a>
                         </div>
                    </div>
                    <div className='flex col-6'></div>
                    <div className='d-flex justify-content-end col-1'> 
                         <button type='button' aria-label='Open menu' className='outline-none kc-menu-button flex justify-center items-center'>
                              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 " 
                                   fill="none" 
                                   stroke-linecap="round" 
                                   stroke-linejoin="round" 
                                   stroke-width="2" 
                                   viewBox="0 0 24 24" 
                                   stroke="currentColor">
                                   <path d="M4 7h16M12 17h8"></path>
                              </svg>
                         </button>
                    </div>
               </div>
		</nav>
	)
}

export default Menu