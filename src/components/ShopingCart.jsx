import React, { useState } from 'react'

const ShopingCart = () => {

  const [state, setstate] = useState({
    product: [
      {
        id: "A001",
        name: 'Apple',
        price: 100,
        quantity: 1,
        image: 'https://th.bing.com/th?id=OIP.VCgRxWcTx836WafFitRx0AHaIn&w=231&h=269&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
      },
      {
        id: "A002",
        name: 'Banana',
        price: 60,
        quantity: 1,
        image: 'https://th.bing.com/th/id/OIP.emjzYKViT1SKMALrVmqujQHaE8?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      },
      {
        id: "A003",
        name: 'Promogranate',
        price: 140,
        quantity: 1,
        image: 'https://th.bing.com/th/id/OIP.sG4rK2tX46C2xSTceuPvnwHaF0?w=251&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      },
      {
        id: "A004",
        name: 'Orange',
        price: 80,
        quantity: 1,
        image: 'https://th.bing.com/th/id/OIP.oeAewWAXAhrf1OhGVQk2YwHaGr?w=215&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      },
      {
        id: "A005",
        name: 'Grapes',
        price: 100,
        quantity: 1,
        image: 'https://steptohealth.com/wp-content/uploads/2017/01/bunch-of-red-grapes.jpg'
      }

    ]
  });
  let { product } = state;

  //filter method is used to filter the array of object and return the new array of object based on the condition 
  const increment = (productId) => {
    let updatedProduct = product.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product;
    });

    setstate({
      product: updatedProduct
    })
  }
  const decrement = (productId) => {
    let updatedProduct = product.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity - 1 > 0 ? product.quantity - 1 : 1 }
      }
      return product;
    });

    setstate({
      product: updatedProduct
    })
  };

  let total = () => {
    let total = 0;
    product.forEach((product) => {
      total += product.price * product.quantity;
    })
    return total;
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col ">
            <p className='text-success h1'>My Shoping Cart</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus temporibus accusamus natus sed at commodi numquam odio sit, itaque distinctio corporis dignissimos deserunt, quas dolor, ipsa magnam? Eligendi, dolor?</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col shadow-lg">
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
                {
                  product.map((product) => {
                    return (
                      <tr key={product.sno} >
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td><img src={product.image} height={30} width={40} alt="" /></td>
                        <td>&#8377;{product.price.toFixed(2)}</td>
                        <td>
                          <i onClick={() => decrement(product.id)} className='fa fa-minus m-2'></i>
                          {product.quantity}
                          <i onClick={() => increment(product.id)} className='fa fa-plus m-2'></i>
                        </td>
                        <td>&#8377;{(product.price * product.quantity).toFixed(2)}</td>
                      </tr>

                    )
                  }
                  )
                }
                <tr>
                  <td colSpan="4" className="text-right"></td>
                  <td className='fw-bold' >Grand Total:</td>
                  <td>&#8377;{total().toFixed(2)}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}

export default ShopingCart;