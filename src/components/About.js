import MarioAdrian1 from "../assets/Mario and Adrian A.jpg";
import MarioAdrian2 from "../assets/Mario and Adrian b.jpg";
import style from "./About.module.css";

function About() {
    return (
        <section id={style.about}>
            <div className={style.text}>
                <h1 className={style.title}>Little Lemon</h1>
                <h3 className={style.title}>Chicago</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className={style.images}>
                <img src={MarioAdrian1} alt="Mario and Adrian talking in a kitchen, in front of a table of bowls" width="200px" height="300px"/>
                <img src={MarioAdrian2} alt="Mario and Adrian laughing together in a kitchen" width="200px" height="300px"/>
            </div>
        </section>
    )
}

export default About;