import { Slider, Typography } from '@mui/material'
import React from 'react'
import ReactStars from "react-rating-stars-component"


const categories = [
    "All",
    "Accessories",
    "Cameras & Photography",
    "Car & Vehicle Electronics",
    "Computers & Accessories",
    "GPS & Accessories",
    "Home Audio",
    "Home Theater, TV & Video",
    "Mobiles & Accessories",
    "Portable Media Players",
    "Radio Communication",
    "Tablets",
    "Telephones & Accessories",
    "Electronic Equipment Warranties",
    "eBook Readers & Accessories",
    "Wearable Technology",
    "General Purpose Batteries & Battery Chargers",
    "Headphones, Earbuds & Accessories",
    "Power Accessories"
]
const FillterBar = ({ statePrice, fillteredProductsCount, CategoryState, setRattings }) => {

    const { Category, setCategory } = CategoryState
    const { price, priceHandler } = statePrice
    const options = {
        edit: false,
        color: "gray",
        activeColor: "#F7D060",
        size: window.innerWidth < 600 ? 15 : 20,
        value: 1,
        isHalf: true
    }
    const options4 = { ...options, value: 4 }
    const options3 = { ...options, value: 3 }
    const options2 = { ...options, value: 2 }
    const options1 = { ...options, value: 1 }

    return (
        <>
            <div className="card p-0 m-0">
                <div className="card-body p-0 m-0 d-flex align-items-center justify-content-between mx-2">
                    <div>


                    </div>
                    <div >
                        <a className="btn bg-purple-lt w-100 my-1" style={{ color: "rgb(58, 0, 61)" }} data-bs-toggle="offcanvas" href="#offcanvasEnd" role="button" aria-controls="offcanvasEnd">
                            Fillters
                        </a>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom " style={{ height: "100%" }} tabIndex="-1" id="offcanvasEnd" aria-labelledby="offcanvasEndLabel" aria-modal="true" role="dialog">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title" id="offcanvasStartLabel">Fillters</h1>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        <div className="col-3 fw-bold" data-bs-toggle="tabs" role="tablist">
                            <span className="nav-item" role="presentation">
                                <a className="list-group-item list-group-item-action d-flex align-items-center  p-3 rounded " href="#tabs-delivery" data-bs-toggle="tab" aria-selected="true" role="tab" tabIndex={-1}>
                                    Delivery
                                    <small className="text-muted ms-auto">24</small></a></span>

                            <span className="nav-item" role="presentation">
                                <a href="#tabs-categories" className="list-group-item list-group-item-action d-flex align-items-center  p-3 rounded my-2 " data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex="-1">
                                    Categories      <small className="text-muted ms-auto">{categories.length}</small></a></span>
                            <span className="nav-item" role="presentation">
                                <a href="#tabs-price" className="list-group-item list-group-item-action d-flex align-items-center  p-3 rounded my-2 " data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
                                    Price </a>
                            </span>
                            <span className="nav-item" role="presentation">
                                <a href="#tabs-customerReview" className="list-group-item list-group-item-action d-flex align-items-center  p-3 rounded my-2 " data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
                                    Customer Reviews </a>
                            </span>
                            <span className="nav-item" role="presentation">
                                <a href="#tabs-sortBy" className="list-group-item list-group-item-action d-flex align-items-center  p-3 rounded my-2 " data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
                                    Sort By </a>
                            </span>
                        </div>
                        <div className="col-9">
                            <div className="card-body">
                                <div className="tab-content">

                                    <div className="tab-pane d-flex flex-column  " id="tabs-delivery" role="tabpanel" >
                                        <div className='mb-4'>
                                            <p className=' fs-3 mb-2 px-2 fw-bolder d-inline'>Delivery</p>
                                            <hr className='w-25 my-2' />
                                            <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 8) }}>
                                                Get it Today
                                            </button>
                                            <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 8) }}>
                                                Get it by Tommorow
                                            </button>
                                        </div>
                                        <p className=' fs-3 mb-2 px-2 fw-bolder'>Shipping Options</p>
                                        <hr className="w-25 my-2" />
                                        <div className='mb-4'>
                                            <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }}>
                                                Eligible Pay On Delivery
                                            </button>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-end">
                                            <button className="list-group-item p-2 rounded  active px-5 " type="button" data-bs-dismiss="offcanvas">
                                                Close offcanvas {fillteredProductsCount}
                                            </button>
                                        </div>
                                    </div>




                                    <div className="tab-pane" id="tabs-categories" role="tabpanel">
                                        <div className='mb-4'>
                                            <p className=' fs-3 mb-2 px-2 fw-bolder d-inline'>Categories</p>
                                            <hr className='w-25 my-2' />
                                            {
                                                categories.map((element) => {
                                                    return <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }} key={element} onClick={() => { setCategory(element) }}>
                                                        {element}
                                                    </button>
                                                })
                                            }
                                        </div>
                                        <div className="d-flex align-items-end justify-content-end">
                                            <button className="list-group-item p-2 rounded  active px-5 " type="button" data-bs-dismiss="offcanvas">
                                                Close offcanvas {fillteredProductsCount}
                                            </button>
                                        </div>
                                    </div>





                                    <div className="tab-pane" id="tabs-price" role="tabpanel">
                                        <div className='mb-4'>
                                            <p className=' fs-3 mb-2 px-2 fw-bolder d-inline'>Price</p>
                                            <hr className='w-25 my-2' />

                                            <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }}>
                                                Under ₹1000
                                            </button>
                                            <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }}>
                                                ₹1000 - ₹5000
                                            </button>
                                            <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }}>
                                                ₹5000 - ₹10000
                                            </button>
                                            <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }}>
                                                ₹10000 - ₹20000
                                            </button>
                                            <button className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }}>
                                                ₹20000 and Above
                                            </button>
                                        </div>
                                        <div className='mb-4 w-50'>
                                            <p className=' fs-3 mb-2 px-2 fw-bolder d-inline'>Customize Price</p>
                                            <hr className='w-50 my-2' />


                                            <Slider
                                                value={price}
                                                onChange={priceHandler}
                                                valueLabelDisplay='auto'
                                                aria-labelledby='range-slider'
                                                min={0}
                                                max={150000} />

                                        </div>
                                        <div className="d-flex align-items-end justify-content-end">
                                            <button className="list-group-item p-2 rounded  active px-5 " type="button" data-bs-dismiss="offcanvas" >
                                                Close offcanvas {fillteredProductsCount}
                                            </button>
                                        </div>
                                    </div>


                                    <div className="tab-pane" id="tabs-customerReview" role="tabpanel">
                                        <div className='mb-4'>
                                            <p className=' fs-3 mb-2 px-2 fw-bolder d-inline'>Customer Review</p>
                                            <hr className='w-25 my-2' />

                                            <a className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }} onClick={() => { setRattings(4) }}>
                                                <ReactStars {...options4} /> <span className='fs-3 mx-2'>& Up </span>
                                            </a>
                                            <a className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }} onClick={() => { setRattings(3) }}>
                                                <ReactStars {...options3} /> <span className='fs-3 mx-2'>& Up </span>
                                            </a>
                                            <a className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }} onClick={() => { setRattings(2) }}>
                                                <ReactStars {...options2} /> <span className='fs-3 mx-2'>& Up </span>
                                            </a>
                                            <a className="list-group-item list-group-item-action d-flex align-items-center p-2 rounded my-2" style={{ width: (window.innerWidth / 7) }} onClick={() => { setRattings(1) }}>
                                                <ReactStars {...options1} /> <span className='fs-3 mx-2'>& Up </span>
                                            </a>

                                        </div>

                                        <div className="d-flex align-items-end justify-content-end">
                                            <button className="list-group-item p-2 rounded  active px-5 " type="button" data-bs-dismiss="offcanvas">
                                                Close offcanvas
                                            </button>
                                        </div>
                                    </div>


                                    <div className="tab-pane" id="tabs-sortBy" role="tabpanel">
                                        <h4>Price tab</h4>
                                        <div>Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris accumsan nibh habitant senectus</div>
                                        <div className="d-flex align-items-end justify-content-end">
                                            <button className="list-group-item p-2 rounded  active px-5 " type="button" data-bs-dismiss="offcanvas">
                                                Close offcanvas {fillteredProductsCount}
                                            </button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FillterBar
