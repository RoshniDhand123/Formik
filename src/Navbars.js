import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from'react-icons/md';
import{Link} from 'react-router-dom';
import {sidebardata} from './sidebardata';
import Footer from './footer';
import './navbars.css';

function Navbars() {
    return (
        <>

        <div className='navbar'>
      </div>
      <nav className='nav'>
    
      
{sidebardata.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                <div className="icon">
                  {item.icon}
                
                  <span>{item.title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
    
      </nav>
      <div className="footer">
      </div>
      </>
    )
}

export default Navbars;
