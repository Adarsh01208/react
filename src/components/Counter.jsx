import React, { useState } from 'react'

const Counter = () => {

  const [like, setlike] = useState({
    count: 0
  });

  const increment = () => {
    setlike({ count: like.count + 1 })
  }

  const decrement = () => {
    setlike({ count: like.count - 1 })
  }
  return (
    <>

      <div className="container m-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card shadow-lg rounded-2">
              <div className="card-header shadow-lg">
                <h1 className='text-success text-center'>Counter Card</h1>
              </div>
              <div className="card-body text-center">
                <h1> Count: {like.count} </h1>
                <div className="btn btn-success  text-center   m-4" onClick={increment}> Like</div>
                <div className="btn btn-warning  text-center   m-4" onClick={decrement}>Dislike</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter