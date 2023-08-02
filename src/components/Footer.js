import logo from "../assets/LogoColor.png";

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="Little Lemon Logo" width="200px" height="300px" />
            </div>
            <div>
                <p>Doormat Navigation</p>
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
            </div>
            <div>
                <p>Contact</p>
                <ul>
                    <li>ADDRESS</li>
                    <li>PHONE NUMBER</li>
                    <li>EMAIL</li>
                </ul>
            </div>
            <div>
                <p>Social Media</p>
                <ul>
                    <li>FACEBOOK</li>
                    <li>TWITTER</li>
                    <li>INSTAGRAM</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;