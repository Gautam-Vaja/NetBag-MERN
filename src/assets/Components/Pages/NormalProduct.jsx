import React from 'react'
import SampleImage from "../../../../public/Netbag-Logo-Mini.png"
import ReactStars from "react-rating-stars-component"
const options = {

    edit: false,
    color: "gray",
    activeColor: "#F7D060",
    size: window.innerWidth < 600 ? 15 : 20,
    value: 2.5,
    isHalf: true

}
const NormalProduct = ({ product }) => {

    return (
        <>

            <div class="card card-link-pop card-link">
                <div div class="img-responsive img-responsive-21x9 p-0 text-center py-3 " style={{ background: " rgb(230 231 233 / 39%)" }} >
                    <img className='' src={product.images[0].url} height="250" width="auto" alt="" />
                </div>

                <div class="card-body">

                    <h4 class="m-0">{product.brand}</h4>
                    <h2 class="">{product.name}</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <ReactStars {...options} />
                        (254) rattings
                    </div>
                    <div className="d-flex justify-content-between align-items-between mb-2">
                        <p className='d-flex justify-content-between align-items-center m-0'>
                            <span>&#8377;</span>  <span className='fs-2 fw-bolder'>{product.price}</span>
                        </p>
                        <p className='d-flex justify-content-between align-items-center m-0'>
                            <span>MRP: </span><strike className='fs-4' style={{}}>1200000</strike>
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
                        <p className='m-0'> FREE Delivery At Home</p>
                    </div>

                </div>
            </div >

        </>
    )
}

export default NormalProduct
