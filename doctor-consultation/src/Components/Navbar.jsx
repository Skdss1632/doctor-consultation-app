import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // Simulating authentication status

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/doctors', label: 'ALL DOCTORS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <div className='flex items-center justify-between px-10 py-5 gap-5 text-sm mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="" />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        {navLinks.map((link) => (
          <NavLink to={link.path} key={link.path}>
            <li className='py-1'>{link.label}</li>
            {/* when hr is active make it block-- applied in css file */}
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>))}
      </ul>

      <div className='flex items-center gap-4'>
        {
          token ? <div className='flex items-center cursor-pointer gap-2 group relative'>
            <img className='rounded-full w-8' src={assets.profile_pic} alt=''></img>
            <img className='w-2.5' src={assets.dropdown_icon} alt=''></img>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white rounded-full font-light px-3 py-3 hidden md:block'>Create account</button>
        }
      </div>
    </div>
  )
}

export default Navbar


