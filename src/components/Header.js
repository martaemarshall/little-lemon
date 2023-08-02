import logo from "../assets/Logo.svg";

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt='A drawing of a lemon next to the words Little Lemon'/>
            </div>
            <nav>
                <ul>
                    <li a='/'>HOME</li>
                    <li a='/'>ABOUT</li>
                    <li a='/'>MENU</li>
                    <li a='/'>RESERVATIONS</li>
                    <li a='/'>ORDER ONLINE</li>
                    <li a='/'>LOGIN</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;