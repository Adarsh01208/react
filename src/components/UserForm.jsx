import React, { useState } from 'react'

const UserForm = () => {

    const [state, setstate] = useState({
        name: 'adasrh',
    })

    const updateinput = (e) => {
        setstate({ name: e.target.value })
    }

    return (
        <>
            <div className="container m-5">
                <div className="row">
                    <div className="col-md-4  ">
                        <div className="card shadow-lg rounded-2">
                            <div className="card-header shadow-lg bg-warning">
                                <h1 className='text-success text-center'>User Name</h1>
                            </div>
                            <div className="card-body text-center ">
                                <label className='h4 m-2' htmlFor="">Enter Name:</label>
                                <input placeholder='Enter Name' className='form-control' type="text" onChange={updateinput} />
                            </div>
                            <div className='mx-5 py-3'>
                                <h4 className=''> Hey : {state.name} </h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserForm;