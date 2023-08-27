import React, { useState } from 'react'



const ProductItems = () => {

  const [state, setstate] = useState({
    product:
    {
      id: "A001",
      name: 'Apple',
      price: 100,
      quantity: 2,
      image: 'https://th.bing.com/th?id=OIP.VCgRxWcTx836WafFitRx0AHaIn&w=231&h=269&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    }
  });
  let { product } = state;

  const increment = () => {
    setstate({
      product:
      {
        ...product, quantity: product.quantity + 1
      }
    })
  }

  const decrement = () => {
    setstate({
      product:
      {
        ...product,
        quantity: product.quantity - 1 > 0 ? state.product.quantity - 1 : 1
      }
    })
  }



  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <p className='text-success h1'>Products Items</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus temporibus accusamus natus sed at commodi numquam odio sit, itaque distinctio corporis dignissimos deserunt, quas dolor, ipsa magnam? Eligendi, dolor?</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <table className='table table-striped table-hover  table-light text-center'>
              <thead >
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Img</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td><img src={product.image} height={30} width={40} alt="" /></td>
                  <td>&#8377;{product.price.toFixed(2)}</td>
                  <td>
                    <i onClick={decrement} className='fa fa-minus m-2'></i>
                    {product.quantity}
                    <i onClick={increment} className='fa fa-plus m-2'></i>
                  </td>
                  <td>&#8377;{(product.price * product.quantity).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>



    </>
  )
}

export default ProductItems