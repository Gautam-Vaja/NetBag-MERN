import React from 'react'
import SampleImage from "../../../../public/Netbag-Logo-Mini.png"
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

const NormalProduct = ({ product }) => {

    const { _id, brand, name, price, rattings, numofreviews, images } = product
    const options = {
        edit: false,
        color: "gray",
        activeColor: "#F7D060",
        size: window.innerWidth < 600 ? 15 : 20,
        value: rattings > 0 ? +rattings : 0,
        isHalf: true
    }
    return (
        <>

            <Link className="card card-link-pop card-link" to={`/products/${_id}`}>
                <div div className="img-responsive img-responsive-21x9 p-0 text-center py-3 " style={{ backgroundColor: " rgb(230, 231, 233, 0.39)" }} >
                    <img src={images[0].url} height="250" width="auto" />
                </div>

                <div className="card-body ">

                    <h4 className="m-0">{brand}</h4>
                    <h2 className="">{name}</h2>
                    {rattings &&
                        rattings > 0 ? <div className="d-flex justify-content-between align-items-center">
                        <span className='m-0 p-0'>
                            <ReactStars {...options} />
                        </span>
                        <span className='m-0 p-0'>
                            ({numofreviews}) rattings
                        </span>
                    </div> : <div className="d-flex justify-content-center align-items-center">
                        <span className=' fs-3 mb-1'>
                            No Review Yet
                        </span>
                    </div>
                    }

                    <div className="d-flex justify-content-between align-items-between mb-2">
                        <p className='d-flex justify-content-between align-items-center m-0'>
                            <span>&#8377;</span>  <span className='fs-2 fw-bolder'>{price}</span>
                        </p>
                        <p className='d-flex justify-content-between align-items-center m-0'>
                            <span>MRP: </span><strike className='fs-4' >1200000</strike>
                        </p>
                        <p className='d-flex justify-content-between align-items-center m-0'>
                            (<span>30%</span>  <span className='fs-5'>off</span>)
                        </p>
                    </div>
                    <div className='  text-center  my-auto'>
                        <img src={SampleImage} height={20} alt="SubscriptionLogo" className='my-1' />
                        <span className='fw-bolder my-1'>
                            Member
                        </span>
                        <p className='m-0'> FREE Delivery by NetBag</p>
                    </div>

                </div>
            </Link>

        </>
    )
}

export default NormalProduct
