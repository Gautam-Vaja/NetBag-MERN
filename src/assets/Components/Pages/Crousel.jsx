import React from 'react'

const Crousel = () => {
    return (
        <>
            <div className="card-body">
                <div id="carousel-indicators-thumb" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators carousel-indicators-thumb">
                        <button type="button" data-bs-target="#carousel-indicators-thumb" data-bs-slide-to="0" className="ratio ratio-4x3" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsRF3IBSO4pDN70CtmeX__PuKo3lfY3qtg&usqp=CAU)" }}></button>
                        <button type="button" data-bs-target="#carousel-indicators-thumb" data-bs-slide-to="1" className="ratio ratio-4x3" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsRF3IBSO4pDN70CtmeX__PuKo3lfY3qtg&usqp=CAU)" }}></button>
                        <button type="button" data-bs-target="#carousel-indicators-thumb" data-bs-slide-to="2" className="ratio ratio-4x3 active" aria-current="true" style={{ backgroundImage: "url(https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg)" }}></button>
                        <button type="button" data-bs-target="#carousel-indicators-thumb" data-bs-slide-to="3" className="ratio ratio-4x3" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsRF3IBSO4pDN70CtmeX__PuKo3lfY3qtg&usqp=CAU)" }}></button>
                        <button type="button" data-bs-target="#carousel-indicators-thumb" data-bs-slide-to="4" className="ratio ratio-4x3" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsRF3IBSO4pDN70CtmeX__PuKo3lfY3qtg&usqp=CAU)" }}></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img className="d-block " alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsRF3IBSO4pDN70CtmeX__PuKo3lfY3qtg&usqp=CAU" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block " alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsRF3IBSO4pDN70CtmeX__PuKo3lfY3qtg&usqp=CAU" />
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block " alt="" src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block " alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsRF3IBSO4pDN70CtmeX__PuKo3lfY3qtg&usqp=CAU" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block " alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsRF3IBSO4pDN70CtmeX__PuKo3lfY3qtg&usqp=CAU" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crousel
