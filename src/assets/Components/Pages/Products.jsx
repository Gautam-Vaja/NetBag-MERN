import React, { useEffect } from 'react'
import NormalProduct from './NormalProduct'
import { GetProduct } from '../Services/Actions/ProductAction'
import { useSelector, useDispatch } from 'react-redux'
import DotsLoading from '../Loaders/DotsLoading'

const Products = () => {
    const dispatch = useDispatch()

    const { loading, product, productCount, error } = useSelector((state) => state.ProductReducer)
    useEffect(() => {
        if (error) {
            console.log(error)
        }
        dispatch(GetProduct())
    }, [dispatch, Error])


    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center ">
                    {loading ? <DotsLoading /> :
                        product && product.map((element) => {
                            return <div className="col-md-5 col-lg-4 col-xl-3 col-sm-12 my-2" key={element._id}>
                                <NormalProduct product={element} />
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Products
