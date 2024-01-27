import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className=''>   
			<div className="navbar bg-black text-white">
  <div className="navbar-start ">
    <div className="dropdown mx-9">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-black rounded-box w-52 mx-9 flex gap-2">
	  <li className='text-2xl hover:text-red-500 hover:scale-105 transition-all'><Link to='home'> Home</Link>  </li>
	  <li className='text-2xl hover:text-red-500 hover:scale-105 transition-all'><Link to='blog'> Blog</Link>  </li>
      <li className='text-2xl hover:text-red-500 hover:scale-105 transition-all'><Link to='/about'> About</Link>  </li>
      <li className='text-2xl hover:text-red-500 hover:scale-105 transition-all'><Link to='/service'> Service</Link>  </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl">Demo</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 flex gap-2">

	<li className='text-2xl hover:text-red-500 hover:scale-105 transition-all'><Link to='home'> Home</Link>  </li>
	  <li className='text-2xl hover:text-red-500 hover:scale-105 transition-all'><Link to='blog'> Blog</Link>  </li>
      <li className='text-2xl hover:text-red-500 hover:scale-105 transition-all'><Link to='/about'> About</Link>  </li>
      <li className='text-2xl hover:text-red-500 hover:scale-105 transition-all'><Link to='/service'> Service</Link>  </li>
    
    </ul>
  </div>
  
  <div className='navbar navbar-end'>
   <Link to='/login'>
      <button className='btn btn-primary'>Login</button>
   </Link>
</div>
</div>

		</div>
	);
};

export default Navbar;