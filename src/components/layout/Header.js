import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <header className="flex p1" id="nav">
            <h4>Movie List</h4>
            <nav className="flexCenter">
                <ul className="navUl flex">
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <Link to="/movies_list/">My List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header