import logo from './images/Header-logo.png';
import './App.css';
export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <ul>
                    <li className="first">
                        <a href="/" className="logo">
                            <img src={logo} width='300' height='100'></img>
                        </a>
                    </li>
                    <li className = 'dropdown'>
                        <a href="/">About us</a>
                        <div className='dropdown-content'>
                            <a href="/">About GA</a>
                        </div>
                    </li>
                    <li>
                        <a href="/">Capabilities</a>
                    </li>
                    <li>
                        <a href="/">VehicleGwac</a>
                    </li>
                    <li>
                        <a href="/">Clients</a>
                    </li>
                    <li>
                        <a href="/">Partners</a>
                    </li>
                    <li>
                        <a href="/">News</a>
                    </li>
                    <li>
                        <a href="/">Careers</a>
                    </li>
                    <li>
                        <a href="/">Contacts</a>
                    </li>
                    <li>
                        <a href="/">Careers</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}