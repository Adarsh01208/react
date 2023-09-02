import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'

const UserList = () => {

    const [state, setstate] = useState({
        users: []
    })

    useEffect(() => {
        // UserService.getAllUsers().then(res => {
        //     setstate({ users: res.data })
        // }).catch(err => {
        //     console.log(err)
        // })

        // return () => {
        //     setstate({ users: [] })
        // }

        // async function getAllUsers() {
        //     try {
        //         let res = await UserService.getAllUsers()
        //         setstate({ users: res.data })
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // getAllUsers()

        fetchAllUsers()

        
    }, [])

    const fetchAllUsers = async () => {
        try {
            let res = await UserService.getAllUsers()
            setstate({ users: res.data })
        } catch (error) {
            console.log(error)
        }
    }




    let { users } = state;

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className='text-success h1'>User List</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus temporibus accusamus natus sed at commodi numquam odio sit, itaque distinctio corporis dignissimos deserunt, quas dolor, ipsa magnam? Eligendi, dolor?</p>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <table className='table table-striped table-hover  table-light text-center'>
                        <thead className='table-dark' >
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 &&
                                users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.street}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList