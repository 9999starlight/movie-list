import React from 'react'
import { Link } from 'react-router-dom'
//import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import './Header.css'
function Header() {
    return (
        <header className="flex p1">
            <h4>Movie List</h4>
            <nav className="flexCenter">
                <ul className="navUl flex">
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#mylist"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        >My List</NavHashLink >
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header