import React, { useState } from 'react'

const RegisterForm = () => {

    const [state, setstate] = useState({
        user:
        {
            username: '',
            email: '',
            password: '',
            designation: '',
            bio: '',
            terms: false

        }
    });

    let { user } = state;

    const inputUser = (e) => {
        setstate({
            user: {
                ...user,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitform = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const updatecheckbox = (e) => {
        setstate({
            user: {
                ...user,
                terms: e.target.checked
            }
        })
    }


    return (
        <>
        <pre>{JSON.stringify(state)}</pre>
            <div className="container m-5 ">
                <div className="row ">
                    <div className="col-md-4   ">
                        <div className="card shadow-lg rounded-2 ">
                            <div className="card-header  bg-warning">
                                <h1 className='text-success text-center'>Register</h1>
                            </div>
                            <div className="card-body bg-success text-center ">
                                <form onSubmit={submitform}>
                                    <div className='m-4'>
                                        <input type="text" placeholder='Enter Name' className='form-control'
                                            name='username'
                                            value={user.username}
                                            onChange={inputUser} />
                                    </div>
                                    <div className='m-4'>
                                        <input type="email" placeholder='Enter email' className='form-control'
                                            name='email'
                                            value={user.email}
                                            onChange={inputUser} />
                                    </div>
                                    <div className='m-4'>
                                        <input type="password" placeholder='Enter Password' className='form-control'
                                            name='password'
                                            value={user.password}
                                            onChange={inputUser} />
                                    </div>
                                    <div className='m-4'>
                                        <select name='designation'
                                            className='form-control'
                                            value={user.designation}
                                            onChange={inputUser}>
                                            <option value="">Select Designation</option>
                                            <option value="sr software developer">Sr SoftwareDeveloper</option>
                                            <option value="team lead">Team Lead</option>
                                            <option value="manager">Manager</option>
                                            <option value="software traine">Software Traine</option>
                                        </select>
                                    </div>
                                    <div className='m-4'>
                                        <textarea rows={4} placeholder='Bio' className='form-control'
                                            name='bio'
                                            value={user.bio}
                                            onChange={inputUser}
                                        />
                                    </div>
                                    <div className='m-4 text-light'>
                                        <input type='checkbox' className='form-check-input mx-2'
                                            name='terms'
                                            value={user.terms}
                                            onChange={updatecheckbox}
                                        />
                                       I accept's Terms and Conditions
                                    </div>
                                    <div className='mb-2'>
                                        <input type="submit" value="Register" className='btn btn-primary border' />
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

export default RegisterForm