import React from 'react'
import SampleImage from "../../../../../public/NetBag-Logo-Mini.png"

const ProductSmallImages = ({ images }) => {
    const { url, public_id, _id } = images
    return (
        <>
            <div className="row mx-1">
                <div className=" mx-1 p-0 col-auto">
                    <div className="card">
                        <div className="card-body p-2 d-flex flex-column">
                            <span className="avatar my-1 " style={{ background: "gray" }}>
                                <img src={url} />
                            </span>

                        </div>
                    </div>
                </div>
                <div className=" mx-1 p-0 col-10">
                    <div className="card">
                        <div className="card-body p-2">
                            <img src={SampleImage} width="450" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSmallImages
