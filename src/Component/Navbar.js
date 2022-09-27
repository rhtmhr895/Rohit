import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to={'/Blog'}>Blog</Link>
                </li>
                <li>
                    <Link to={'/Read'}>Read</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar