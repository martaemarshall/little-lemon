import logo from "../assets/Logo.svg";
import style from "./Header.module.css";

function Header() {
    return (
        <header id={style.header}>
            <div>
                <img src={logo} alt='A drawing of a lemon next to the words Little Lemon'/>
            </div>
            <nav className={style.nav}>
                <ul>
                    <li a='#'>HOME</li>
                    <li a='#'>ABOUT</li>
                    <li a='#'>MENU</li>
                    <li a='#'>RESERVATIONS</li>
                    <li a='#'>ORDER ONLINE</li>
                    <li a='#'>LOGIN</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;