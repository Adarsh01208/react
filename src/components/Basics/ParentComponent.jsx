import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const [state, setstate] = useState({
        name: '',
    })
    const receiveData = (data) => {
       setstate({
        ...state,
        author : data
         })
    }

    const sendtochild = () => {
       setstate({
        name : 'hey child'
            })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card bg-success mt-5">
                            <div className="card-body">
                                <h4 className='text-white'>Parent Component</h4>
                                <h6 className='text-white'>From Child : {state.author}</h6>
                                <button onClick={sendtochild} className='btn btn-primary'>Send To Child</button>
                                {/* passing data to child component using props */}
                                
                                <ChildComponent  name={state.name}  senddata={receiveData} />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ParentComponent;