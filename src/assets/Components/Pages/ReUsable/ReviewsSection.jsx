import React from 'react'
import ReactStars from "react-rating-stars-component"
const ReviewsSection = ({ review }) => {
    const { name, user, comment } = review

    console.warn(review)
    const options = {
        edit: false,
        color: "gray",
        activeColor: "#F7D060",
        size: window.innerWidth < 600 ? 15 : 20,
        value: review.ratting > 0 ? +review.ratting : 0,

        isHalf: true
    }
    return (
        <>
            <p className=' p-0 mb-3 fw-bolder fs-2'> Top Reviews </p>


            <div div className="d-flex align-items-center" key={user}>
                <span className="avatar avatar-sm mx-1 border-black">JL</span>
                <span className=" fs-3 mx-1">{name}</span>
            </div><div>

                <ReactStars {...options} />

                <div className="accordion border-0" id="accordion-example ">
                    {comment.length > 135 ? <><div className="accordion-item">
                        <span className='fs-3'>
                            {comment.substring(0, 135)}
                        </span>


                        <div id="collapse-1" className="accordion-collapse collapse" data-bs-parent="#accordion-example" >
                            <div className="accordion-body p-0 ">
                                <span className='fs-3' type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false">

                                    {comment.substring(135)}
                                </span>
                            </div>
                        </div>
                    </div><button className="accordion-button p-0 collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false">
                            Read More   
                        </button></> : comment}




                </div>


            </div>




        </>
    )
}

export default ReviewsSection
