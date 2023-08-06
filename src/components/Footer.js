import logo from "../assets/LogoColor.png";
import style from "./Footer.module.css";

function Footer() {
    return (
        <footer id={style.footer}>
            <div className={style.logo}>
                <img src={logo} alt="Little Lemon Logo"/>
            </div>
            <div className={style.nav}>
                <div className={style.footernav}>
                    <p className={style.header}>Doormat Navigation</p>
                    <nav className={style.links}>
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>MENU</li>
                            <li>RESERVATIONS</li>
                            <li>ORDER ONLINE</li>
                            <li>LOGIN</li>
                        </ul>
                    </nav>
                </div>
                <div className={style.footernav}>
                    <p className={style.header}>Contact</p>
                    <nav className={style.links}>
                        <ul>
                            <li>ADDRESS</li>
                            <li>PHONE NUMBER</li>
                            <li>EMAIL</li>
                        </ul>
                    </nav>
                </div>
                <div className={style.footernav}>
                    <p className={style.header}>Social Media</p>
                    <nav className={style.links}>
                        <ul>
                            <li>FACEBOOK</li>
                            <li>TWITTER</li>
                            <li>INSTAGRAM</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;