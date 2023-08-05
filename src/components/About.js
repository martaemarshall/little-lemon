import MarioAdrian1 from "../assets/Mario and Adrian A.jpg";
import MarioAdrian2 from "../assets/Mario and Adrian b.jpg";
import style from "./Hero.module.css";

function About() {
    return (
        <section>
            <div>
                <h1 className={style.title}>Little Lemon</h1>
                <h3 className={style.title}>Chicago</h3>
                <p>A little bit about our Adrian and Mario and how they found Little Lemon. 
We hope that you will read more about us and be inspired.</p>
            </div>
            <div>
                <img src={MarioAdrian1} alt="Mario and Adrian talking in a kitchen, in front of a table of bowls" width="200px" height="300px"/>
                <img src={MarioAdrian2} alt="Mario and Adrian laughing together in a kitchen" width="200px" height="300px"/>
            </div>
        </section>
    )
}

export default About;