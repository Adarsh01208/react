import React, { useState } from 'react'




const UserAuth = () => {
    const [state, setstate] = useState({
        isLoggedin: false
    
    });

    const login = () => {
        setstate({
            isLoggedin: true
        })
    }
    const logout = () => {
        setstate({
            isLoggedin: false
        })
    }
    
    return (
        <>
            <div className="container m-5 ">
                <div className="row">
                    <div className="col-md-4  ">
                        <div className="card shadow-lg rounded-2">
                            <div className="card-header">
                                <h3 className='text-success text-center'>User Authentication</h3>
                            </div>
                            <div className="card-body text-center bg-warning ">
                                
                                {
                                    //Conditional Rendering
                                    // state.isLoggedin ? true : false
                                    state.isLoggedin ? <h4 className='text-success text-center'>Welcome Adarsh</h4> : 
                                    <h4 className='text-secondary text-center'>Welcome Guest</h4>
                                }
                                {/* <p className='h4'>Welcome Guest</p>
                                <p className='h4'>Welcome Adarsh</p> */}
                                {
                                    //Conditional Rendering
                                    state.isLoggedin ? <button onClick={logout} className='btn btn-danger m-2 border border-white'>Logout </button> :
                                     <button onClick={login} className='btn btn-primary m-2 border border-2  '>Login </button>
                                }

                                {/* <button className='btn btn-primary m-2'>Login </button>
                                <button className='btn btn-warning m-2'>Logout </button> */}
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserAuth