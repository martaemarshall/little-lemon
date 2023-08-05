import delivery from "../assets/delivery.svg";

function Card(props) {
    return (
        <div id="card">
            <div className="item">
                <img src={props.imageUrl} alt={props.imageAlt} />
            </div>
            <div className="listing">
                <h3>{props.item}</h3>
                <h4>&#0036;{props.price}</h4>
            </div>
            <p>{props.description}</p>
            <div className="delivery">
                <h4 >Order a Delivery</h4>
                <img src={delivery} alt="A delivery scooter icon"/>                
            </div>
        </div>
    );
};

export default Card;