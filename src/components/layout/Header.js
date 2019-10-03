import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className="flex p1">
          <h1>Movie List</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Search</Link>
                    </li>
{/*                     <li>
                        <Link to="/movies_list">My List</Link>
                    </li> */}
                </ul>
            </nav>  
        </header>
    )
}
export default Header