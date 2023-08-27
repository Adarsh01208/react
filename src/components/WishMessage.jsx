import React, { useState } from 'react'

const WishMessage = () => {

  const [wishMessage, setWishMessage] = useState({
    message: 'Hello'
  })

  const GoodMorning = () => {
    setWishMessage({ message: 'Good Morning' })
  }

  let GoodAfternoon = (value) => {
    setWishMessage({ message: value })
  };

  const GoodEvening = () => {
    setWishMessage({ message: 'good Evening' })
  }

  return (
    <>
      <div className="container m-5">
        <div className="row">
          <div className="col-md-6 ">
            <div className="card shadow-lg rounded-2">
              <div className="card-header shadow-lg">
                <h1 className='text-success text-center'>Wishing Message</h1>
              </div>
              <div className="card-body text-center p-4">
                <h1> Message: {wishMessage.message} </h1>
                <div className="btn btn-success text-center m-4" onClick={GoodMorning} > Good Morning</div>
                <div className="btn btn-warning text-center m-4" onClick={() => GoodAfternoon('Good Afternoon')} >Good Afternoon</div>
                <div className="btn btn-secondary text-center m-4" onClick={() => { setWishMessage(({ message: 'Good Evening' })) }} >Good Evening</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WishMessage