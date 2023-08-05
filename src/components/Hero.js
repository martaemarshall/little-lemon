import food from "../assets/restauranfood.jpg";
import style from "./Hero.module.css";

function Hero() {
    return (
        <section id={style.hero}>
            <div className={style.container}>
                <h1 className={style.title}>Little Lemon</h1>
                <h3 className={style.title}>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div>
                    <button className={style.buttonreserve}>Reserve a Table</button>
                </div>
            </div>
            <div className={style.container}>
                <img src={food} alt="A Mediterranean chicken dish made at Little Lemon" width="300px" height="350px" />
            </div>
        </section>
    )
}

export default Hero;