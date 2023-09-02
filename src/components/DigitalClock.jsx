import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

    const [state, setstate] = useState({
        time: new Date().toLocaleTimeString(),
    })
    useEffect(() => {
        setInterval(() => {
            setstate({ time: new Date().toLocaleTimeString() })
        }, 1000);
        return () => {
            clearInterval()
        }
    }, [])

    return (
        <>
            <div className="container m-5">
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="card shadow-lg rounded-2">
                            <div className="card-header  bg-warning">
                                <h1 className='text-success text-center'>Digital Clock</h1>
                            </div>
                            <div className="card-body text-center p-4">
                                <h3> Time: {state.time} </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigitalClock