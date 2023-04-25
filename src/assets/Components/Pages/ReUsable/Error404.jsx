import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <div className="page page-center">
                <div className="container-tight">
                    <div className="empty">
                        <div className="empty-header">404</div>
                        <p className="empty-title">Oops… You just found an error page</p>
                        <p className="empty-subtitle text-muted">
                            We are sorry but the page you are looking for was not found
                        </p>
                        <div className="empty-action">
                            <Link to="/" className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M5 12l6 6"></path><path d="M5 12l6 -6"></path></svg>
                                Take me home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404
