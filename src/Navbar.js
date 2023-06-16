import logo from './images/Header-logo.png';
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
                <li>
                    <a href="/">About us</a>
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
            </ul>
        </nav>
        </header>
    )
}