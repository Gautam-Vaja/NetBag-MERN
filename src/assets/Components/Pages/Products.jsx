import React from 'react'
import NormalProduct from './NormalProduct'
import MetaData from '../Layouts/MetaData'
const product = {
    _id: "iy98hfbi90u3u0",
    name: "Iphone 14 Pro",
    brand: "Apple",
    images: [{ url: "https://www.apple.com/v/iphone-14-pro/e/images/key-features/compare/compare_iphone_14_pro__dny32075a7ki_large_2x.jpg" }],
    price: 120000
}

const Products = () => {
    return (
        <>

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 col-lg-4 col-xl-3 col-sm-12 my-2">
                        <NormalProduct product={product} />
                    </div>
                </div>

            </div>

        </>
    )
}
export default Products
