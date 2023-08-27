import React, { useState } from 'react'

const LoginForm = () => {

    const [state, setstate] = useState({
        user:
        {
            username: '',
            password: ''
        }
    });

    let { user } = state;

    const inputUser = (e) => {
        setstate({
            user: {
                ...user,
                [e.target.name]:e.target.value
            }
        })
    }



    const submitform = (e) => {
        e.preventDefault();
        console.log(state);
    }


    return (
        <>
            {/* <pre>{JSON.stringify(state)}</pre> */}
            <div className="container m-5 ">
                <div className="row">
                    <div className="col-md-4  ">
                        <div className="card shadow-lg rounded-2">
                            <div className="card-header  bg-warning">
                                <h1 className='text-success text-center'>Login form</h1>
                            </div>
                            <div className="card-body text-center ">
                                <form onSubmit={submitform}>
                                    <div className='m-4'>
                                        <input type="text" placeholder='Enter Name' className='form-control'
                                        name='username'
                                            value={user.username}
                                            onChange={inputUser} />
                                    </div>
                                    <div className='m-4'>
                                        <input type="password" placeholder='Enter Password' className='form-control'
                                        name='password'
                                            value={user.password}
                                            onChange={inputUser} />
                                    </div>
                                    <div className='mb-2'>
                                        <input type="submit" value="Login" className='btn btn-primary' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginForm