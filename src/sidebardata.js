import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from'react-icons/md';
import * as FiIcons from 'react-icons/fi';

 export const sidebardata=[
     {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
     },
     {
        title:'SignUp',
        path:'/signup',
        icon:<AiIcons.AiFillLock/>,
        cName:'nav-text'
     },
     {
        title:'Login',
        path:'/login',
        icon:<FiIcons.FiLogIn/>,
        cName:'nav-text'
     },
     {
        title:'Dashboard',
        path:'/dashboard',
        icon:<MdIcons.MdOutlineDashboardCustomize/>,
        cName:'nav-text'
     },
    


 ]
  



