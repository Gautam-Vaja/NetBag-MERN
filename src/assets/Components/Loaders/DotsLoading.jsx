import React from 'react'
import { SyncLoader } from 'react-spinners'

const DotsLoading = () => {
    return (
        <div className="d-block" style={{ height: window.innerHeight }}>
            <div className="d-flex align-items-center justify-content-center"><SyncLoader color="#36d7b7" /></div>
        </div>
    )
}

export default DotsLoading
