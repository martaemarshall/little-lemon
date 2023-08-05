import salad from "../assets/greek_salad.jpg";
import bruchetta from "../assets/bruchetta.jpg";
import dessert from "../assets/lemon_dessert.jpg";
import Card from "./Card";
import style from "./Card.css";
import style2 from "./Highlights.module.css";

function Highlights() {
    return (
        <section>
            <div>
                <div className={style2.topline}>
                    <h2>Specials</h2>
                    <div className={style2.menubutton}>
                        <button>Online Menu</button>
                    </div>
                </div>
                <div className="menu">
                    <Card imageUrl={salad} imageAlt="Greek Salad" item="Greek Salad" price="12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                    <Card imageUrl={bruchetta} imageAlt="Bruchetta" item="Bruchetta" price="5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                    <Card imageUrl={dessert} imageAlt="Lemon Dessert" item="Lemon Dessert" price="5.00" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
                </div>
            </div>
        </section>


    )
}

export default Highlights;