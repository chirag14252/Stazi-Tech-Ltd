import "./Card.css"

function Card({PropDetails}) {
    console.log(PropDetails);
    const PropertyImage = PropDetails?.image; 
    const Location = PropDetails?.Location;
    const Location_name = PropDetails?.Location_name;
    const Rooms = PropDetails?.Rooms 
    const Bed = PropDetails?.Bed; 
    const Bath = PropDetails?.Bath; 
    const Dimension = PropDetails?.Dimension; 
    const Cost = PropDetails?.Cost;
    return <div className="prop-card">
        <div className="image-container">
            <div className="image-container-top">
            <button class="button-left-top">For Rent</button>
            <button class="button-right-top"><img src="/heart.png" alt="" className="like"/></button>
            </div>
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg" alt={`${Location_name} Image`} width={200} className="main-img"/>
           
        </div>
        <div className="details-container">
           
            <p className="location-name"><span><img src="/location.png" alt="C" className="icon" width="10" /></span>{Location}</p>
            <h3 className="prop-name">{Location_name}</h3>
            <div className="prop-features">
                <div className="prop-feature">
                    <img src="/building.png" alt="C" className="icon" width="20" />
                    <p className="feature-name">{Rooms} Rooms</p>
                </div>
                <div className="prop-feature">
                    <img src="/bed.png" alt="C" className="icon" width="20" />
                    <p className="feature-name">{Bed} bed</p>
                </div>
                <div className="prop-feature">
                    <img src="/bath.png" alt="C" className="icon" width="20" />
                    <p className="feature-name">{Bath} Bath</p>
                </div>
                <div className="prop-feature">
                    <img src="/cross.png" alt="C" className="icon" width="20" />
                    <p className="feature-name">{Dimension} sft</p>
                </div>
            </div>
            <div className="rent-and-buttons-div">
                <h3 className="prop-rent">{Cost} <span className="per-month-span">/ month</span></h3>
                <button className="rent-now-button">Read more</button>
            </div>
        </div>
    </div>
}

export default Card;

