import Card from "./CardTestimonial";
import photo from "../assets/lemon.png";
import style1 from "./Card.css";
import style2 from "./Testimonials.module.css";

function Testimonials() {
    return (
        <section>
            <div className={style2.heading}>
                <h2>Testimonials</h2>
            </div>
            <div className="menu">
                <Card rating="5 stars" imageUrl={photo} alt="Photo of reviewer" name="Reviewer1" review="Little Lemon is great!" />
                <Card rating="5 stars" imageUrl={photo} alt="Photo of reviewer" name="Reviewer2" review="I'm glad to get healthy food options in my area." />
                <Card rating="5 stars" imageUrl={photo} alt="Photo of reviewer" name="Reviewer3" review="My new go-to restaurant!" />
                <Card rating="5 stars" imageUrl={photo} alt="Photo of reviewer" name="Reviewer4" review="Great! Make sure to try their famous Greek Salad." />
            </div>
        </section>
    )
}

export default Testimonials;