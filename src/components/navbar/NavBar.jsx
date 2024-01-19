import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.jpeg'
import { Link } from 'react-scroll';
import {FaXmark, FaBars, FaRightToBracket } from 'react-icons/fa6'

const Navbar = ()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky]= useState(false); 

    //set toggle menu 
    const toggleMenu=()=>{
            setIsMenuOpen(!isMenuOpen);
    }
    

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY> 100){
                setIsSticky(true)
            }else{
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.addEventListener('scroll', handleScroll);
        }
    });  
    //Create a navigation array
    const navItems=[
        {link:"Home", path:"home"},
        {link:"Service", path:"service"},
        {link:"About", path:"about"},
        {link:"Cars", path:"menu"},  
        {link:"Contact", path:"contact"}, 
    ]
  
    return (
      <header className='w-full  md:bg-transparent fixed top-0 left-0 right-0 min-w-full'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky? "sticky top-0 left-0 right-0 border-b bg-white duration-300": ""}`}>
                <div className='item-content'>
                    <a href="/" className='upperlink'> 
                    <img src={Logo} alt="" className='w-10 inline-block items-center' />
                    <span className='text-[#263238] text-2xl'>Bliss Car.</span></a>
                  

                   <div className='space-x-12 hidden lg:flex items-center '>
                   <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link, path}) =>
                                <Link  to={path}   spy={true}smooth={true} offset={-100} key={path} className='linked'>{link}</Link>
                            )
                        }
                   </ul> 
                        <FaRightToBracket className='h-9 w-6 text-green-900'/>
                   </div> 

                   {/* For mobile devices */}
                   <div className='md:hidden'>
                        <button 
                            onClick={toggleMenu}
                            
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500 cursor-pointer duration-300 ease-in-out '>
                                {
                                    isMenuOpen? (<FaXmark className='h-6 w-6' />):(<FaBars className='h-6 w-6'/>)
                                }
                        </button>

                   </div>

                </div>
                <div className={`space-y-4 px-4 mt-16 py-7 bg-green-100   ${isMenuOpen? "block fixed top-0 right-0 left-0 ": "hidden"}`}>
                {
                            navItems.map(({link, path}) =>
                                <Link  to={path}   
                                        spy={true}
                                        smooth={true}
                                        offset={-100} 
                                        key={path} 
                                        className='block text-base 
                                                 text-gray900 
                                                 hover:text-brandPrimary 
                                                   '
                                >
                                    {link}
                                </Link>
                            )
                        }
                        <FaRightToBracket className='h-9 w-6 text-green-900'/>
                </div>
            </nav>
            
      </header>            
    ) 
}

export default Navbar