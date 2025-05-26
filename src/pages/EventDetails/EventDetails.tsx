import './EventDetails.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import reviewDetails from './../../Data/reviewDetails.js'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

function EventDetails() {

    const reviews = reviewDetails;

    return (
        <>
            <div className="container-fluid" id="event-details-main">
                <div className="container-sm text-white">
                    <div className="main w-100 text-white position-relative" style={{height: '25rem'}}>
                        <div className="d-flex flex-column gap-2 position-absolute bottom-0 p-3">
                            <h1 className="fw-bold">Taylor Swift | The Eras Tour</h1>
                            <div className="d-lg-flex gap-4">
                                <div><i className="bi bi-calendar-date pe-2"></i>Friday,December 15,2023</div>
                                <div><i className="bi bi-clock pe-2"></i>8.00PM</div>
                                <div><i className="bi bi-pin-map pe-2"></i>Madison Square garden,New York</div>
                            </div>
                            <div className="d-flex gap-4">
                                <h3>From $89.00</h3>
                                <button className="btn btn-success">Book Now</button>
                            </div>

                        </div>

                    </div>
                    <div className="bg-dark p-3 d-flex flex-column flex-lg-row gap-2 justify-content-between">
                        <div className="d-flex gap-4">
                            <div><i className="bi bi-calendar-date pe-2"></i>Dec 15,2023</div>
                            <div><i className="bi bi-clock pe-2"></i>8.00PM</div>
                            <div><i className="bi bi-pin-map pe-2"></i>Madison Square garden</div>
                        </div>
                        <div className="d-flex gap-4 justify-content-between">
                            <div className="border rounded-5 border-opacity-10 border-white px-2 py-1"><i
                                className="bi bi-share pe-2"></i>Share
                            </div>
                            <div className="border rounded-5 border-opacity-10 border-white px-2 py-1">Add to Calendar
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2 mt-3">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">About
                                </button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-profile" type="button" role="tab"
                                        aria-controls="nav-profile"
                                        aria-selected="false">Review
                                </button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-contact" type="button" role="tab"
                                        aria-controls="nav-contact"
                                        aria-selected="false">Contact
                                </button>
                                <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-disabled" type="button" role="tab"
                                        aria-controls="nav-disabled"
                                        aria-selected="false" disabled>Disabled
                                </button>
                            </div>
                        </nav>
                        <div className="tab-content mt-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                 aria-labelledby="nav-home-tab">
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex flex-column gap-2">
                                        <h5>About the Event</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                            scelerisque,
                                            libero vitae efficitur efficitur, libero massa efficitur libero,
                                            vitae
                                            blandit
                                            libero ligula eu dolor. Praesent scelerisque, libero vitae efficitur
                                        </p>

                                        <h6>Event Guideline</h6>
                                        <ul>
                                            <li>General Admission seating</li>
                                            <li>No outside food or beverages</li>
                                            <li>Clear bag policy in effect</li>
                                            <li>Professional photography only</li>
                                        </ul>
                                        <h5>COVID-19 Safety Measures</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                            scelerisque,
                                            libero vitae efficitur efficitur, libero massa efficitur libero,
                                            vitae

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                 aria-labelledby="nav-profile-tab"
                            >
                                <div className="container py-5">
                                    <h2 className="text-center mb-4">Customer Reviews</h2>

                                    <div className="row">

                                        {reviews.map((review: { id: Key | null | undefined; rating: number; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; review: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; author: { avatar: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; verified: any; }; }) => (
                                        <div className="col-md-4 mb-4" key={review.id}>
                                            <div className="card review-card h-100">
                                                <div className="card-body">
                                                    <div className="rating d-flex gap-2 mb-3">
                                                        {[1, 2, 3, 4, 5].map((star) => {
                                                            if (star <= Math.floor(review.rating)) {
                                                                return <i key={star} className="bi bi-star-fill text-warning"></i>;
                                                            } else if (star === Math.ceil(review.rating) && review.rating % 1 > 0) {
                                                                return <i key={star} className="bi bi-star-half text-warning"></i>;
                                                            } else {
                                                                return <i key={star} className="bi bi-star text-dark"></i>;
                                                            }
                                                        })}
                                                    </div>
                                                    <h5 className="card-title">{review.title}</h5>
                                                    <p className="card-text">{review.review}</p>
                                                    <div className="d-flex align-items-center mt-auto">
                                                        <img
                                                            style={{height: '32px'}}
                                                            src={'https://www.seekpng.com/png/detail/377-3776081_facecircle-user-picture-in-circle-png.png'}
                                                            className="rounded-circle me-2"
                                                            alt="User"
                                                        />
                                                        <div>
                                                            <h6 className="mb-0">{review.author.name}</h6>
                                                            {review.author.verified && <small className="text-muted">Verified Buyer</small>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/*<div className="col-md-4 mb-4">*/}
                                    {/*    <div className="card review-card h-100">*/}
                                    {/*        <div className="card-body">*/}
                                    {/*            <div className="rating d-flex gap-2 mb-3">*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-half text-warning"></i>*/}
                                    {/*                <i className="bi bi-star text-dark"></i>*/}
                                    {/*            </div>*/}
                                    {/*            <h5 className="card-title">Great Product!</h5>*/}
                                    {/*            <p className="card-text">This product exceeded my expectations. The*/}
                                    {/*                quality is outstanding and it arrived quickly.</p>*/}
                                    {/*            <div className="d-flex align-items-center mt-auto">*/}
                                    {/*                <img style={{height:'32px'}} src="https://www.seekpng.com/png/detail/377-3776081_facecircle-user-picture-in-circle-png.png"*/}
                                    {/*                     className="rounded-circle me-2" alt="User"/>*/}
                                    {/*                <div>*/}
                                    {/*                    <h6 className="mb-0">John D.</h6>*/}
                                    {/*                    <small className="text-muted">Verified Buyer</small>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}


                                    {/*<div className="col-md-4 mb-4">*/}
                                    {/*    <div className="card review-card h-100">*/}
                                    {/*        <div className="card-body">*/}
                                    {/*            <div className="rating d-flex gap-2 mb-3">*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star text-dark"></i>*/}
                                    {/*            </div>*/}
                                    {/*            <h5 className="card-title">Very Satisfied</h5>*/}
                                    {/*            <p className="card-text">Works exactly as described. I would definitely*/}
                                    {/*                recommend this to others.</p>*/}
                                    {/*            <div className="d-flex align-items-center mt-auto">*/}
                                    {/*                <img src="https://via.placeholder.com/40"*/}
                                    {/*                     className="rounded-circle me-2" alt="User"/>*/}
                                    {/*                <div>*/}
                                    {/*                    <h6 className="mb-0">Sarah M.</h6>*/}
                                    {/*                    <small className="text-muted">Verified Buyer</small>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}


                                    {/*<div className="col-md-4 mb-4">*/}
                                    {/*    <div className="card review-card h-100">*/}
                                    {/*        <div className="card-body">*/}
                                    {/*            <div className="rating d-flex gap-2 mb-3">*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star-fill text-warning"></i>*/}
                                    {/*                <i className="bi bi-star text-dark"></i>*/}
                                    {/*            </div>*/}
                                    {/*            <h5 className="card-title">Perfect!</h5>*/}
                                    {/*            <p className="card-text">Absolutely love it! The best purchase I've made*/}
                                    {/*                this year.</p>*/}
                                    {/*            <div className="d-flex align-items-center mt-auto">*/}
                                    {/*                <img src="https://via.placeholder.com/40"*/}
                                    {/*                     className="rounded-circle me-2" alt="User"/>*/}
                                    {/*                <div>*/}
                                    {/*                    <h6 className="mb-0">Michael T.</h6>*/}
                                    {/*                    <small className="text-muted">Verified Buyer</small>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>

                                <div className="mt-5">
                                    <h4 className="mb-3">Write a Review</h4>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="rating" className="form-label">Rating</label>
                                            <select className="form-select" id="rating">
                                                <option selected>Select rating</option>
                                                <option value="5">5 Stars</option>
                                                <option value="4">4 Stars</option>
                                                <option value="3">3 Stars</option>
                                                <option value="2">2 Stars</option>
                                                <option value="1">1 Star</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reviewText" className="form-label">Your Review</label>
                                            <textarea className="form-control" id="reviewText"></textarea>
                                        </div>
                                        <button type="button" className="btn btn-primary">Submit Review</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                             aria-labelledby="nav-contact-tab"
                             >...
                        </div>
                        <div className="tab-pane fade" id="nav-disabled" role="tabpanel"
                             aria-labelledby="nav-disabled-tab"
                             >...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default EventDetails;
