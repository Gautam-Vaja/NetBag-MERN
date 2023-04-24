import React from 'react'
import Delivery from "../../../../../public/Delivery.png"
import Replacement from "../../../../../public/Replacement.png"
import Secure_Payments from "../../../../../public/Secure-Payments.png"
import Warranty from "../../../../../public/Warranty.png"
import Top_Brands from "../../../../../public/Top-Brands.png"

const images = [Delivery, Replacement, Warranty, Top_Brands, Secure_Payments]
const ServicesByNetbag = () => {
  return (
    <div className='d-flex justify-content-between'>
      <div className="p-0 mx-1 text-center">
        <img src={Delivery} alt='' height="30" width="auto" />
        <p>Free & Fast Delivery</p>
      </div>
      <div className="p-0 mx-1 text-center">
        <img src={Replacement} alt='' height="30" width="auto" />
        <p>10 days replacement</p>
      </div>
      <div className="p-0 mx-1 text-center">
        <img src={Warranty} alt='' height="30" width="auto" />
        <p>1 year warranty</p>
      </div>
      <div className="p-0 mx-1 text-center">
        <img src={Top_Brands} alt='' height="30" width="auto" />
        <p>Top Brands</p>
      </div>
      <div className="p-0 mx-1 text-center">
        <img src={Secure_Payments} alt='' height="30" width="auto" />
        <p>Secure Transections</p>
      </div>


    </div>
  )
}

export default ServicesByNetbag
