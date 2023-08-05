function CardTestimony(props) {
    return (
        <div id="card">
            <div className="rating">
                <h4>{props.rating}</h4>
                <div>
                    <img src={props.imageUrl} alt={props.imageAlt} />
                </div>
                <h4>{props.name}</h4>
            </div>
            <p>{props.review}</p>
        </div>
    );
};

export default CardTestimony;