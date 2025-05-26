import './EventCard.css'
import {Link} from "react-router-dom";
interface EventCardProps {
    img: string;
    title: string;
    date: string;
    time: string;
    location: string;
    price: number;
}

function EventCard({img, title, date, time, location, price}: EventCardProps) {
    return (
        <>
            <Link to="/eventdetails" className="card-img-top bg-white rounded" style={{width: '18rem', height: '25rem'}}>
                <div id="card-img" className="rounded" style={{backgroundImage: `url(${img})`}}></div>
                <div className="card-body p-3 d-flex flex-column gap-2">
                    <h6>{title}</h6>
                    <div className="bi bi-calendar-date"> {date}</div>
                    <div className="bi bi-clock">{time}</div>
                    <div className="bi bi-map-pin">{location}</div>
                    <div className="d-flex align-items-center  justify-content-between">
                        <h5 className="text-primary">${price}</h5>
                        <button className="btn btn-success">Book Now</button>

                    </div>
                </div>

            </Link>

        </>
    );
}

export default EventCard;