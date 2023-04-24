import React from 'react'
import ProductImages from './ReUsable/ProductImages'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetProductDetails } from '../Services/Actions/ProductAction'
import { Link, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import OffersSection from './ReUsable/OffersSection'
import ServicesByNetbag from './ReUsable/ServicesByNetbag'


const ProductDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const { loading, product, error } = useSelector((state) => state.ProductDetailsReducer)
    useEffect(() => {
        if (error) {
            console.log(error)
        }
        dispatch(GetProductDetails(params.id))
    }, [dispatch, Error, params.id])

    const { _id, brand, name, price, rattings, numofreviews, description, stock } = product
    const images = [{ url: "public\\NetBag-Logo-Mini.png", public_id: "HelloID", _id: "12y89y20orh918yr01" }]
    return (
        <div>
            {
                loading ? <DotLoader /> :
                    <div className="row mx-1 d-flex justify-content-center">
                        <div className="col-5 p-0">
                            <ProductImages images={images} />
                        </div>
                        <div className="col-4 p-3">

                            <Link to="" className='fs-3'> Visit The {brand} Store</Link>
                            <p className="fs-1 fw-bolder lh-5 my-2">{name}</p>
                            <p className="fs-1 fw-bolder lh-5 my-2">
                                {
                                    rattings > 0 ? <div className="d-flex my-3 align-items-center">
                                        <span className='m-0 p-0'>
                                            <ReactStars {...options} />
                                        </span>
                                        <span className='m-0 p-0'>
                                            ({numofreviews}) rattings
                                        </span>
                                    </div> : <div className="d-flex my-3 align-items-center">
                                        <span className=' fs-3 mb-1'>
                                            No Review Yet
                                        </span>
                                    </div>
                                }
                            </p>
                            <hr className='my-3' />
                            <div className="d-flex  align-items-center my-0" style={{ fontSize: "2rem" }}>
                                <span className='text-danger' >-30%</span>
                                <p className='d-flex  align-items-center my-0 mx-2  ' >
                                    <span>&#8377;</span>  <span className='fw-bolder'>{price}</span>
                                </p>
                            </div>

                            <p className='d-flex align-items-center my-2 fs-2 text-secondary'>
                                <span>M.R.P :  </span><strike className='mx-1' >1200000</strike>
                            </p>
                            <span className='fs-3'>Inclusive of all taxes</span>
                            <p className='fs-3'>EMI starts at &#8377; {Math.round(price / 24)}. No cost EMI Option </p>
                            <hr className='my-2' />
                            <OffersSection />
                            <hr className='my-3 ' />
                            <ServicesByNetbag />
                            <hr className='my-3 ' />
                            <p className='my-3 py-0 fw-bolder fs-2'>About This Item : </p>
                            <p>
                                {`\t ${description}`}
                            </p>

                        </div>
                        <div className="col-3 p-2 ">

                            <div className="card card-borderless bg-transparent ">

                                <div className="card-body">
                                    <div className="accordion" id="accordion-example">
                                        <div className="accordion-item p-2">


                                            <label className="form-check fs-3 fw-bold mx-2 my-0">
                                                <input className="form-check-input" type="radio" name="radios" disabled={false} data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" />
                                                <span className="form-check-label">With Exchange </span>
                                                <div className="d-flex  align-items-center">
                                                    <span className=" fs-4">Up to </span>
                                                    <span className="text-danger fw-bold fs-4 mx-1"> &#8377;{price}.00</span>
                                                    <span className=" fs-4"> off</span>
                                                </div>
                                            </label>

                                            <div id="collapse-1" className="accordion-collapse collapse " data-bs-parent="#accordion-example">
                                                <div className="accordion-body ">
                                                    <button className="btn  w-100 bg-purple-lt" style={{ background: "#3A003D" }}>
                                                        Select item to exchange
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item p-2">

                                            <label className="form-check fs-3 fw-bold mx-2 my-0 ">
                                                <input className="form-check-input" type="radio" name="radios" checked={true} data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" />
                                                <span className="form-check-label">Without Exchange</span>
                                                <div className="d-flex  align-items-center">
                                                    <span className="text-danger fw-bold fs-4 me-1">&#8377;{price}.00</span>
                                                    <strike className="text-secondary fs-4 ms-1">&#8377;{(price) + Math.round(price / 10)}.00</strike>
                                                </div>
                                            </label>
                                            <div id="collapse-2" className="accordion-collapse collapse show" data-bs-parent="#accordion-example">
                                                <div className="accordion-body ms-3 ">
                                                    <>
                                                        <p className='fw-bold text-secondary mb-2'>FREE DELIVERY</p>
                                                        <p className='my-0 text-black'>Or fastest Delivery by</p>
                                                        <span className='fw-bolder fs-3 text-dark me-1'>WednesDay 26 April</span>
                                                        <span className='text-dark fs-4'>if order </span>
                                                        <span className='text-success fs-4'>with in </span>
                                                        <span className='text-secondary fs-4'>{Date.now()} </span>
                                                    </>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mx-4'>

                                <p className={`fs-1 mb-1 fw-bold text-${stock <= 0 ? `danger` : `success`}`}>{stock <= 0 ? `Out Of` : `In`} Stock</p>
                                <span className="">Sold by  </span>
                                <span className="fw-bold text-black"> NetBag Corporation </span>
                                <span className="">and </span>
                                <span className="fw-bold text-black"> fullfilled by Netbag </span>
                                <div className="my-3">
                                    <button href="#" className="btn bg-purple-lt w-100 my-1" style={{ color: "#3A003D" }} >

                                        Add To Cart
                                    </button>
                                    <button className="btn btn-purple w-100 my-1" style={{ background: "#3A003D" }} disabled={(stock <= 0)}>
                                        Buy Now
                                    </button>
                                </div>
                                {
                                    stock <= 0 ? <p >
                                        <span>this item is curruntly </span><span className='text-danger'>out of stock </span><span>we will notify if you add item to your cart</span>
                                    </p> : ""}
                            </div>

                        </div >
                    </div>

            }
        </div>

    )
}

export default ProductDetails
