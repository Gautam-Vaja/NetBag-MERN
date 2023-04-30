import React from 'react'
import Logo from '../../../../../public/NetBag-Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearErrors, signin } from '../../Services/Actions/UserAction';
import { useEffect } from 'react';
import { DotLoader } from 'react-spinners';



const Login = () => {

    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, Setlogin] = useState({
        email: "",
        password: "",
        showPassword: false
    })
    const InputChange = (e) => {
        const { name, value } = e.target
        Setlogin({ ...login, [name]: value })
    }
    const submitForm = (e) => {
        e.preventDefault()
        console.log("hello")
        dispatch(signin(login.email, login.password))

    }
    const { user, loading, isAuthenticated, Error } = useSelector(state => state.UserReducer)

    useEffect(() => {
        if (Error) {
            dispatch(ClearErrors())
        }
        if (isAuthenticated) {
            Navigate("/account")
        }

    }, [dispatch, Error, Navigate, isAuthenticated, user])



    return (
        <>

            {
                loading ? <DotLoader /> :
                    <div className="page page-center">
                        <div className="container container-tight my-2">

                            <div className="card card-md">
                                <div className="card-header">
                                    <div className="mx-auto">
                                        <a href="." className="navbar-brand navbar-brand-autodark">
                                            <img src={Logo} height="auto" width="190" alt="" /></a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="h2 text-center mb-4">Login to your account</h2>
                                    <form onSubmit={submitForm} encType='multipart/form-data' autoComplete="off" noValidate="">
                                        <div className="mb-3">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className={`form-control is-${login.email.length === 0 ? `invalid` : `valid`}`} placeholder="your@email.com" name="email" value={login.email} onChange={InputChange} autoComplete="off" required />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">
                                                Password
                                                <span className="form-label-description">
                                                    <a href="./forgot-password.html">I forgot password</a>
                                                </span>
                                            </label>
                                            <div className="row">
                                                <div className="col pe-0">
                                                    <div className="input-group input-group-flat">
                                                        <input type={login.showPassword ? "text" : "password"} className={`form-control is-${login.password.length === 0 ? `invalid` : `valid`}`} placeholder="Your password" name="password" value={login.password} onChange={InputChange} autoComplete="off" required />
                                                    </div>
                                                </div>
                                                <div className="col-auto ps-1">
                                                    <span className="input-group-text">
                                                        <a className="link-secondary cursor-pointer" data-bs-toggle="tooltip" aria-label="Show password" data-bs-original-title="Show password" onClick={() => { Setlogin({ ...login, showPassword: login.showPassword ? false : true }) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mb-2">
                                            <label className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <span className="form-check-label">Remember me on this device</span>
                                            </label>
                                        </div>
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-primary w-100">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="hr-text">or</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col"><a href="#" className="btn w-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                                            Login with Github
                                        </a></div>
                                        <div className="col"><a href="#" className="btn w-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>
                                            Login with Twitter
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-muted mt-3">
                                Don't have account yet? <Link to="/registration" tabIndex="-1">New Registration</Link>
                            </div>
                        </div>
                    </div>}

        </>
    )
}

export default Login
