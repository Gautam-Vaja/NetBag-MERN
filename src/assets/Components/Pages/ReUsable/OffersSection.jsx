import React from 'react'
import OffersLogo from '../../../../../public/Offers.png'

const OffersSection = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-start mb-2 ">
                <img src={OffersLogo} alt="" height="40" width="auto" />
                <p className="my-3 py-0 fw-bolder fs-3">Special Offers </p>
            </div>

            <div id="carousel-controls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="row">

                            <div className="col-6">

                                <div className="card card-borderless">
                                    <div className="card-body">
                                        <h3 className="card-title">Bank offers</h3>
                                        <div>Flat INR 8000 Instant Discount on ICICI Bank Credit Cards </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6">

                                <div className="card card-borderless">
                                    <div className="card-body">
                                        <h3 className="card-title">No cost EMI</h3>
                                        <div>Upto ₹5,082.59 EMI interest savings on select Credit Cards</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="carousel-item ">

                        <div className="row">

                            <div className="col-6">

                                <div className="card card-borderless">
                                    <div className="card-body">
                                        <h3 className="card-title">Partners offers</h3>
                                        <div>Flat INR 10000 Instant Discount on Partners with Bazaz Finance </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6">

                                <div className="card card-borderless">
                                    <div className="card-body">
                                        <h3 className="card-title">Bank Offer</h3>
                                        <div>5% Instant Discount up to INR 250 on HSBC Cashback Card Credit </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carousel-controls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-controls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </>
    )
}

export default OffersSection
