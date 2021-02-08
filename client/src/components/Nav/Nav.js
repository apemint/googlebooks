import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" to="#">(React) Google Books</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Search</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Saved</Link>
            </li>
        </ul>
    )
}

export default Nav;