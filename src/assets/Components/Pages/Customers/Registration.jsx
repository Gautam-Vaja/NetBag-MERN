import React from 'react'
import Logo from '../../../../../public/NetBag-Logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Registration = () => {
    const [registration, Setregistration] = useState({
        avatar: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        tearmAndCondition: false

    })

    const InputChange = (e) => {
        const { name, value } = e.target
        Setregistration({ ...registration, [name]: value })

    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log("hello")
        dispatch(registration(registration.avatar, registration.name, registration.email, registration.password))

    }


    return (
        <>
            <div className="page page-center">
                <div className="container container-tight my-2">

                    <div className="card card-md" >
                        <div className="card-header">
                            <div className="mx-auto">
                                <Link to="/" className="navbar-brand navbar-brand-autodark">
                                    <img src={Logo} height="auto" width="190" alt="" /></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-3">Create new account</h2>

                            <form onSubmit={submitForm} >
                                <div className="mb-3">
                                    <label className="form-label">Profile Picture</label>
                                    <input name='avatar' value={registration.avatar} type="file" className={`form-control `} onChange={InputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input name='name' value={registration.name} type="text" placeholder="Enter Your Name" className={`form-control is-${registration.name.length === 0 ? `invalid` : `valid`}`} onChange={InputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input name='email' value={registration.email} type="email" className={`form-control is-${registration.email.length === 0 ? `invalid` : `valid`}`} onChange={InputChange} placeholder="Enter email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="row">
                                        <div className="col pe-0">
                                            <div className="input-group input-group-flat">
                                                <input name='password' value={registration.password} type="password" className={`form-control is-${registration.password.length === 0 ? `invalid` : `valid`}`} onChange={InputChange} placeholder="Password" autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-auto ps-1">
                                            <span className="input-group-text">
                                                <a href="#" className="link-secondary" data-bs-toggle="tooltip" aria-label="Show password" data-bs-original-title="Show password" onClick={() => { Setregistration({ ...registration, showPassword: registration.showPassword ? false : true }) }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <div className="row">
                                        <div className="col pe-0">
                                            <div className="input-group input-group-flat">
                                                <input name='confirmPassword' value={registration.confirmPassword} type="password" className={`form-control is-${registration.password !== registration.confirmPassword || registration.confirmPassword.length === 0 ? `invalid` : `valid`}`} onChange={InputChange} placeholder={registration.password !== registration.confirmPassword ? 'Passwords Are Not Matched ' : ''} autoComplete="off" />

                                            </div>
                                        </div>
                                        <div className="col-auto ps-1">
                                            <span className="input-group-text">
                                                <a href="#" className="link-secondary" data-bs-toggle="tooltip" aria-label="Show password" data-bs-original-title="Show password">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="mb-3">
                                    <label className="form-check">
                                        <input type="checkbox" className="form-check-input" checked={registration.tearmAndCondition} onClick={() => { Setregistration({ ...registration, tearmAndCondition: registration.tearmAndCondition ? false : true }) }} onChange={() => { }} />
                                        <span className="form-check-label ">Agree the <Link to="/terms-of-service" tabIndex="-1">terms and policy</Link>.</span>
                                    </label>
                                </div>
                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary w-100">Create new account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="text-center text-muted mt-3">
                        Already have account? <Link to="/signin" tabIndex="-1">Sign in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
