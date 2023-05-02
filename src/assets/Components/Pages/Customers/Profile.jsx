import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
    const Navigate = useNavigate()
    const { loading, isAuthenticated, user, userimg, role, error } = useSelector(state => state.UserReducer)  
    useEffect(() => {
        if (isAuthenticated !== true) {
            Navigate("/signin")
        }
    }, [Navigate, isAuthenticated])


    return (
        <>
            <div className="container p-5 mx-5">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <span className="avatar avatar-lg rounded" style={{ backgroundImage: `url(${user?.avatar?.url})` }}></span>
                    </div>
                    <div className="col">
                        <div className="my-2">Account Holder
                            <h1 className="fw-bold">{user?.name}</h1>
                        </div>
                        <div className="list-inline list-inline-dots text-muted">

                            <div className="list-inline-item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                                <a href="#" className="text-reset">{user?.email}</a>
                            </div>
                            <div className="list-inline-item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z"></path><path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197"></path><path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z"></path></svg>
                                {user?.createdAt}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">

                    <div className="col-4">
                        <Link to="/orders" className="card  my-4">
                            <div className="card-body row d-flex align-items-center">
                                <div className="col-auto">
                                    <img src="/CartBox.png" alt="" height="60" width="auto" />
                                </div>
                                <div className="col">
                                    <p className='fw-bold fs-2 p-0 m-0'>Your Orders</p>
                                    <p className='text-secondary p-0 m-0'>
                                        Track, return, or buy things again</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-4">
                        <Link to="/edit-profile" className="card  my-4">
                            <div className="card-body row d-flex align-items-center">
                                <div className="col-auto">
                                    <img src="/Secure-Payments.png" alt="" height="60" width="auto" />
                                </div>
                                <div className="col">
                                    <p className='fw-bold fs-2 p-0 m-0'>Login And Security</p>
                                    <p className='text-secondary p-0 m-0'>
                                        Edit login, name, and mobile number</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-4">
                        <Link to="/service-center" className="card  my-4">
                            <div className="card-body row d-flex align-items-center">
                                <div className="col-auto">
                                    <img src="/ContactUs.png" alt="" height="60" width="auto" />
                                </div>
                                <div className="col">
                                    <p className='fw-bold fs-2 p-0 m-0'>Contact Us</p>
                                    <p className='text-secondary p-0 m-0'> Lets Connect With Customer Care Now</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
