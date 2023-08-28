import React, { useState } from 'react'
import ProductService from '../Services/ProductService';

const ProductCart = () => {

    const [state, setstate] = useState({
        product: ProductService.getProductList()

    });

    let { product } = state;

    return (
        <>
            <div className="container mt-5">
                <div className="row ">
                    <div className="col ">
                        <p className='text-success h1'>Product Cart</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus temporibus accusamus natus sed at commodi numquam odio sit, itaque distinctio corporis dignissimos deserunt, quas dolor, ipsa magnam? Eligendi, dolor?</p>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="row ">
                    <div className="col-md-8 ">
                        {
                            product.map((item) => {
                                return (
                                    <div key={product.sno} className="card shadow-lg mt-3 border-2">
                                        <div className="card-body">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-md-4">
                                                    <img src={item.image} className='img-fluid' alt="" />
                                                </div>
                                                <div className="col-md-6 text-center  ">
                                                    <h1 className='mb-2'>{item.name}</h1>
                                                    <h2 className='mb-2'>&#8377;{item.price.toFixed(2)}</h2>
                                                    <h3 className='mb-2'>
                                                        {
                                                            //list rendering using && operator  

                                                            item.quantity >= 10 && <span className='text-success'>Available</span>
                                                        }
                                                        {
                                                            item.quantity <= 10 && item.quantity >= 1 && <span className='text-warning'>Hurry Up! Only {item.quantity} left</span>
                                                            // : <span>
                                                            //     <button className='btn btn-success m-2'>Add to Cart</button>
                                                            // </span>
                                                        }
                                                        {
                                                            item.quantity === 0 && <span className='text-danger'>Out of Stock</span>
                                                        }
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCart;