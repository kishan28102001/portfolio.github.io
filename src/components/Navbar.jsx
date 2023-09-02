import React, { useEffect, useState } from "react";
import './Navbar.css';
import Hamburger from 'hamburger-react';
const Navbar = () =>{
    const [isOpen,setIsOpen]=useState(false);
    const [isTop,setIsTop]=useState(false);
    
    useEffect(() =>{
        const handleScroll=()=>{
            if(window.scrollY === 0){
                setIsTop(true)
            };
            if(window.scrollY !== 0){
                setIsTop(false);
            }
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll);
    },[])
    return(
        <section>
            <div className={`${isTop ?"":"bg-[#201934]"} md:px-16 sm:px-8 w-full z-40 fixed top-0 pt-5 pb-5 transition duration-300`}>
                <nav className="flex items-center justify-between">
                    <a href="#hero" className="w-28">
                        <img src="\images\portfolio.png" className='my-icon'></img>
                    </a>
                    <div className={`lg:block absolute right-10 lg:relative lg:top-0 transition-all duration-100 ease-in ${isOpen ? "top-[80px]":"top-[-100px]"}`}>
                        <ul className={`flex text-gray-300 ${isOpen ? "flex-col space-y-5": "flex-row space-x-6"}`}>
                            <li className='hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer'><a href="#about">About</a></li>
                            <li className='hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer'><a href="#projects">Projects</a></li>
                            <li className='hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer'><a href="#technologies">Technologies</a></li>
                            <li className='hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer'><a href="#testimonials">Testimonials</a></li>
                            <li className='hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer'><a href="#contact">Contact Me</a></li>
                        </ul>
                    </div>
                    <div className='lg:hidden block'>
                        <Hamburger toggled={isOpen} toggle={setIsOpen}></Hamburger>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;