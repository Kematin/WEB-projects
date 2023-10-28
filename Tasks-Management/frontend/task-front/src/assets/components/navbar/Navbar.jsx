import { Link } from "react-router-dom";
import { navbar } from "./Navbar.module.css"

function Navbar() {
    return (
        <div id="navbar">
            <ul className={navbar}>
                <li>
                    <Link to="/">Tasks</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar