import React, { useEffect, useState } from 'react'
import NormalProduct from './NormalProduct'
import { GetProduct } from '../Services/Actions/ProductAction'
import { useSelector, useDispatch } from 'react-redux'
import DotsLoading from '../Loaders/DotsLoading'
import { useParams } from 'react-router-dom'
import { Slider, Typography } from '@mui/material'
import FillterBar from './ReUsable/FillterBar'

const Products = () => {
    const [price, setprice] = useState([0, 150000])
    const priceHandler = (event, newPrice) => {
        setprice(newPrice)
    }
    const dispatch = useDispatch()
    const params = useParams()

    const { loading, product, productCount, error, resultPerPage } = useSelector((state) => state.ProductReducer)
    useEffect(() => {
        if (error) {
            console.log(error)
            dispatch(ClearErrors())
        }
        dispatch(GetProduct(params.keyword, price))
    }, [dispatch, error, params.keyword, price])


    return (
        <>
            <FillterBar price={price} priceHandler={priceHandler} />

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
