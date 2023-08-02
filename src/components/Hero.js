import food from "../assets/restauranfood.jpg";

function Hero() {
    return (
        <section>
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>A brief description of what type of food it offers</p>
                <div>
                    <button>Reserve a Table</button>
                </div>
            </div>
            <div>.
                <img src={food} alt="A Mediterranean chicken dish made at Little Lemon" width="200px" height="300px" />
            </div>
        </section>
    )
}

export default Hero;