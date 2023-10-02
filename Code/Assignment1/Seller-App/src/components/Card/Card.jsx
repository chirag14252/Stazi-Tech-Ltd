import "./card.css"

function Card({carDetails}) {
    const carImage = carDetails?.image; // string, URL of the image
    const carName = carDetails?.vehicle_name; // string, name of car
    const carYear = carDetails?.year; // integer, year of launch
    const carCapacity = carDetails?.people; // integer, number of people
    const carFuelType = carDetails?.vehicle_type; // string, "Hybrid" or "Gasoline"
    const carMileage = carDetails?.mileage; // string, "7.7km / 1-litre"
    const carSteerType = carDetails?.mode; // string, "Automatic"
    const carRent = carDetails?.cost; // integer, $440 per month

    return <div className="car-card">
        <div className="image-container">
            <img src={carImage} alt={`${carName} Image`} width={200} />
        </div>
        <div className="details-container">
            <h3 className="car-name">{carName}<span className="car-year">{carYear}</span></h3>
            <div className="car-features">
                <div className="car-feature">
                    <img src="/capacity.png" alt="C" className="icon" width="20" />
                    <span className="feature-value">{carCapacity} people</span>
                </div>
                <div className="car-feature">
                    <img src="/fueltype.png" alt="F" className="icon" width="20" />
                    <span className="feature-value">{carFuelType}</span>
                </div>
                <div className="car-feature">
                    <img src="/mileage.png" alt="M" className="icon" width="20" />
                    <span className="feature-value">{carMileage}</span>
                </div>
                <div className="car-feature">
                    <img src="/steering.png" alt="S" className="icon" width="20" />
                    <span className="feature-value">{carSteerType}</span>
                </div>
            </div>
            <div className="rent-and-buttons-div">
                <h3 className="car-rent">{carRent} <span className="per-month-span">/ month</span></h3>
                <button className="like-button"><img src="/like.png" alt="like" width={16} /></button>
                <button className="rent-now-button">Rent now</button>
            </div>
        </div>
    </div>
}

export default Card;