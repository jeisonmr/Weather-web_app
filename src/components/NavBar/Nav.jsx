import React from 'react'
import { Link } from 'react-router-dom';

import './nav.css';
export const Nav = () => {
  return (
    <>
     <nav className="navContainer">
      <ul className='navMenu'>
        <li>
          <i className="bi bi-columns-gap"></i>
          <Link className='navItem' to={"/"}>Dashboard</Link>
        </li>
        {/* <li>
        <i className="bi bi-list-stars"></i>
          <Link className='navItem' to={"/historial"}>Historico</Link>
        </li> */}
        <li>
        <i className="bi bi-sun-fill"></i>
          <Link className='navItem' to={"/Calendario"}>Calendario</Link>
        </li>
      </ul>
      </nav>
    </>
  )
}
