import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, updateProfile } from '../../Services/Actions/UserAction'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UPDATE_PROFILE_RESET } from '../../Services/Constants/UserConstants'

const EditProfile = () => {
    const dispatch = useDispatch()

    const Navigate = useNavigate()
    const { isAuthenticated, user } = useSelector(state => state.UserReducer)
    const { isUpdated, error, loading } = useSelector(state => state.UpdateUserReducer)
    const [UserDetails, SetUserDetails] = useState({ name: "", email: "", tearmAndCondition: false })

    const InputChange = (e) => {
        const { name, value } = e.target
        SetUserDetails({ ...UserDetails, [name]: value })

    }
    const submitForm = (e) => {
        e.preventDefault()
        if (UserDetails.tearmAndCondition === false) {
            console.log("first accept tearms and conditions")
        } else {
            console.log("hrllo")
            dispatch(updateProfile(UserDetails.name, UserDetails.email))
        }


    }

    useEffect(() => {
        if (isAuthenticated !== true) {
            Navigate("/signin")
        }
        SetUserDetails({ name: user?.name, email: user?.email })
        if (isUpdated) {
            dispatch(loadUser())
            dispatch({ type: UPDATE_PROFILE_RESET })
            Navigate("/account")
        }


    }, [isAuthenticated, Navigate, user, isUpdated])


    return (
        <>
            {console.log(isUpdated)}
            <div className="page page-center">
                <div className="container container-tight my-2">

                    <div className="card card-md" >
                        <div className="card-header">
                            <div className="mx-auto">
                                <Link to="/" className="navbar-brand navbar-brand-autodark">
                                    <img src="/NetBag-Logo.png" height="auto" width="190" alt="" /></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-3">Create new account</h2>

                            <form onSubmit={submitForm} >
                                <div className="mb-3">
                                    <label className="form-label">Profile Picture</label>
                                    <input name='avatar' type="file" className={`form-control `} onChange={InputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input name='name' value={UserDetails?.name} type="text" placeholder="Enter Your Name" className={`form-control is-${UserDetails.name.length === 0 ? `invalid` : `valid`}`} onChange={InputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input name='email' value={UserDetails?.email} type="email" className={`form-control is-${UserDetails.email.length === 0 ? `invalid` : `valid`}`} onChange={InputChange} placeholder="Enter email" />
                                </div>


                                <div className="mb-3">
                                    <label className="form-check">
                                        <input type="checkbox" className="form-check-input" checked={UserDetails.tearmAndCondition} onClick={() => { SetUserDetails({ ...UserDetails, tearmAndCondition: UserDetails.tearmAndCondition ? false : true }) }} onChange={() => { }} />
                                        <span className="form-check-label ">Agree the <Link to="/terms-of-service" tabIndex="-1">terms and policy</Link>.</span>
                                    </label>
                                </div>
                                <div className="form-footer">
                                    <button type="submit" disabled={UserDetails.tearmAndCondition != true} className="btn btn-primary w-100">Update Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default EditProfile
