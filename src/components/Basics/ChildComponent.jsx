import React, { useState } from 'react'

const ChildComponent = (props) => {

  const [state, setstate] = useState({
    author : 'Hey Parent'
  })

  const clickbtn = () => {
    props.senddata(state.author);
  }
  return (
    <>
      <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card bg-warning mt-3">
                            <div className="card-body">
                                <h4 className='text-dark'>Child Component</h4>
                                <h6 className='text-dark'>From Parent : {props.name}</h6>
                                <button className='btn btn-primary' onClick={clickbtn}>Send To Parent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ChildComponent