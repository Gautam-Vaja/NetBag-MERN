import React, { useEffect, useState } from 'react'
import NormalProduct from './NormalProduct'
import { ClearErrors, GetProduct } from '../Services/Actions/ProductAction'
import { useSelector, useDispatch } from 'react-redux'
import DotsLoading from '../Loaders/DotsLoading'
import { useParams } from 'react-router-dom'
import { Slider, Typography } from '@mui/material'
import FillterBar from './ReUsable/FillterBar'

const Products = () => {
    const [price, setprice] = useState([0, 150000])
    const [Category, setCategory] = useState("")
    const [Rattings, setRattings] = useState(0)
    const priceHandler = (event, newPrice) => {
        setprice(newPrice)
    }
    const dispatch = useDispatch()
    const params = useParams()

    const { loading, product, productCount, error, resultPerPage, fillteredProductsCount } = useSelector((state) => state.ProductReducer)
    useEffect(() => {
        if (error) {
            console.log(error)
            dispatch(ClearErrors)
        }
        dispatch(GetProduct(params.keyword, price, Category, Rattings))
    }, [dispatch, error, params.keyword, price, fillteredProductsCount, Category, Rattings])


    return (
        <>
        
            <FillterBar statePrice={{ price, priceHandler }} result={fillteredProductsCount} CategoryState={{ Category, setCategory }} setRattings={setRattings} />

            <div className="container">
                {Rattings}
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
