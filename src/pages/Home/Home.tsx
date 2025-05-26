import "./Home.css"
import EventCard from "../../components/ui/EventCard/EventCard.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eventDetails from "../../Data/evetDetails.js";

function Home() {

    const filterShow= ()=>{
        const filter=document.getElementById("filter-container") as HTMLElement;
        filter.classList.toggle("d-none");
        filter.classList.toggle("d-block");
    }


    return (
        <>

            <div
                className="main w-100 bg-primary p-5 text-white d-flex flex-column justify-content-center align-items-center gap-2">
                <h1 className='fw-bold text-center'>Discover Amazing Events Near You</h1>
                <p className="text-center">Book tickets for concerts, sports, theater & more</p>
                <div className="py-1 bg-white col-lg-5 rounded ps-2 d-flex justify-content-between ">
                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-search fs-6 p-2 text-dark"></i>
                        <input id="input" className="border-0" type="text"
                               placeholder="Search for events,concerts,theater,movies"/>
                    </div>
                    <button className="bg-success px-3 py-1 rounded me-2 text-white">Search</button>
                </div>
            </div>

            <div id="event-container" className="d-flex container-fluid">
                <div className="container-sm  py-3 d-flex flex-column flex-lg-row gap-3">
                    <div id="filter" className="border p-3 pe-3 border-dark border-opacity-50 me-3 rounded">
                        <h4 onClick={filterShow} className="bi bi-filter-left fs-4">Filters</h4>
                        <div id="filter-container" className="d-none d-lg-block">
                            <h5 className="pt-3">Date</h5>
                            <div>
                                <input type="checkbox" id="today" name="date" value="day1"/>
                                <label htmlFor="today">Today</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ThisWeekend" name="date" value="day1"/>
                                <label htmlFor="ThisWeekend">This Weekend</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ThisMonth" name="date" value="day1"/>
                                <label htmlFor="ThisMonth">This Month</label>
                            </div>
                            <div>
                                <input type="checkbox" id="CustomDate" name="date" value="day1"/>
                                <label htmlFor="CustomDate">Custom Date</label>
                            </div>


                            <h5 className="pt-3">Event Type</h5>
                            <div>
                                <input type="checkbox" id="today" name="date" value="day1"/>
                                <label htmlFor="today">Today</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ThisWeekend" name="date" value="day1"/>
                                <label htmlFor="ThisWeekend">This Weekend</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ThisMonth" name="date" value="day1"/>
                                <label htmlFor="ThisMonth">This Month</label>
                            </div>
                            <div>
                                <input type="checkbox" id="CustomDate" name="date" value="day1"/>
                                <label htmlFor="CustomDate">Custom Date</label>
                            </div>


                            <h5 className="pt-3">Price Range</h5>
                            <div>
                                <input type="checkbox" id="today" name="date" value="day1"/>
                                <label htmlFor="today">Today</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ThisWeekend" name="date" value="day1"/>
                                <label htmlFor="ThisWeekend">This Weekend</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ThisMonth" name="date" value="day1"/>
                                <label htmlFor="ThisMonth">This Month</label>
                            </div>
                            <div>
                                <input type="checkbox" id="CustomDate" name="date" value="day1"/>
                                <label htmlFor="CustomDate">Custom Date</label>
                            </div>

                            <h5 className="pt-3">Location</h5>
                            <input type="text" className="p-1" placeholder="Enter Location"/>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between row-gap-2">
                        {
                            eventDetails.map((event: {
                                img: string;
                                title: string;
                                date: string;
                                time: string;
                                location: string;
                                price: number;
                            }) => (
                                <EventCard
                                    img={event.img}
                                    title={event.title}
                                    date={event.date}
                                    time={event.time}
                                    location={event.location}
                                    price={event.price}/>

                            ))
                        }
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" >Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" >1</a></li>
                                <li className="page-item active">
                                    <a className="page-link" >2 </a>
                                </li>
                                <li className="page-item"><a className="page-link" >3</a></li>
                                <li className="page-item">
                                    <a className="page-link" >Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </div>
            </div>


        </>
    )
        ;
}

export default Home;