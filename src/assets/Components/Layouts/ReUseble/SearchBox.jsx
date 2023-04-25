import React from 'react'
import { useState } from 'react'
import { useNavigate, } from 'react-router-dom'

const SearchBox = () => {

    const Navigate = useNavigate()
    const [keyword, setkeyword] = useState("")

    const OnSubmitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            Navigate(`/products/${keyword}`)
        } else {
            Navigate(`/products`)
        }
    }
    return (
        <>
            <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                <form onSubmit={OnSubmitHandler} autoComplete="off" noValidate="">
                    <div className="input-icon">
                        <span className="input-icon-addon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
                        </span>
                        <input id="mdb-5-search-input" value={keyword} autoComplete="off" type="search" className="form-control rounded" onChange={(e) => setkeyword(e.target.value)}></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBox
