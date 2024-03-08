// "use client"
// import {useState} from 'react'
// import Link from "next/link"
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
// import NavLink from './NavLink';
// import MenuOverlay from './MenuOverlay';


// export function Navbar() {
//     const [isNavOpen, setIsNavOpen] = useState(false);

//     type NavType = {
//       title: string,
//       path: string
//     }
  
//     const navLinks: NavType[] = [
//       {
//         title:'about',
//         path:'/about'
//       },
//       {
//         title:'project',
//         path:'/projects'
//       },
//       {
//         title:'contact',
//         path:'/contactme'
//       },
  
//     ]

//     return (
//        <nav className="flex flex-row justify-between pt-4 bg-[#EEEDEB] sticky top-0 right-0 left-0 z-10 bg-opacity-90">
//           <div className="flex flex-wrap items-center justify-between mx-auto px-8 my-3">
//               <Link href='/' className='text-2xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-blue-500 py-3 pl-3 md:p-0 hover:text-[#0B60B0]'>Barry studio</Link>
//               <div className="block md:hidden mobile-menu">
//                 {isNavOpen ?(
//                   <button onClick={() => setIsNavOpen(false)} className='flex items-center px-3 py-2 border rounded border-blue-400 text-blue-400 hover:text-[#fff] hover:border-[#fff]'><XMarkIcon className='h-5 w-5' /></button>
//                 )

//                   : 
//                     (
//                       <button onClick={() => setIsNavOpen(true)} className='flex items-center px-3 py-2 border rounded  border-blue-400 text-blue-400 '><Bars3Icon className='h-5 w-5' /></button>
//                   )
//                 }
//               </div>
//               <div className='menu hidden md:block md:w-auto' id='navbar'>
//                   <ul className='flex p-4 md:p-0 md:flex-row md:space-x-0 mr-6'>
//                     {navLinks.map((navlink, i) => (
//                         <NavLink href={navlink.path} title={navlink.title}  key={i}/>
                      
//                     ))}
                      
//                   </ul>

//               </div>
              

//           </div>
//           {isNavOpen ? <MenuOverlay /> : null}

            
//        </nav>
        
//     )
       
  
// }

"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'



export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  type NavType = {
    title: string,
    path: string
  }

  const navLinks: NavType[] = [
    {
      title:'about',
      path:'/about'
    },
    {
      title:'project',
      path:'/projects'
    },
    {
      title:'contact',
      path:'/contactme'
    },

  ]

  return (
    <nav className='sticky  top-0 right-0 left-0 z-10 bg-[#EEEDEB]  bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-8 my-3'>
            <Link href='/' className='text-2xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-blue-500 py-3 pl-3 md:p-0 hover:text-[#0B60B0]'>Barry studio</Link>
            <div className="block md:hidden mobile-menu">
                  {isNavOpen ?(
                  <button onClick={() => setIsNavOpen(false)} className='flex items-center px-3 py-2 border rounded border-blue-400 text-blue-400 hover:text-[#fff] hover:border-[#fff]'><XMarkIcon className='h-5 w-5' /></button>
                 )

                   : 
                    (
                       <button onClick={() => setIsNavOpen(true)} className='flex items-center px-3 py-2 border rounded  border-blue-400 text-blue-400 '><Bars3Icon className='h-5 w-5' /></button>
                   )
                 }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-0 mr-6'>
                  {navLinks.map((navlink, i) => (
                      <NavLink href={navlink.path} title={navlink.title}  key={i}/>
                    
                  ))}
                    
                </ul>

            </div>
            {isNavOpen ? <MenuOverlay /> : null}


        </div>
    </nav>
  )
}

