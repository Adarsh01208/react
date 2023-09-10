import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosMethods = () => {
    // creating state for getting data
    const [userData, setUserData] = useState([])

    // creating state for posting data
    const data = { name: '', username: '' }
    const [inputData, setinputData] = useState(data)

    // fetching data using axios get method 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
                setUserData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //posting data using axios post method
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', inputData)
            .then(res => {
                console.log(res.data)
                setUserData([...userData, res.data])
                setinputData(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    //update method 
    const UpdateSubmit = (e) => {
        e.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/users/1', inputData)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    //delete method  
    const DeleteSubmit = (e) => {
        e.preventDefault()
        axios.delete('https://jsonplaceholder.typicode.com/users/1')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }




    return (
        <>

            <h1>Get Methods</h1>
            <ul>
                {userData.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <hr />
            <br />
            <br />
            <h2>Post Method</h2>
            <label htmlFor="">Name</label>
            <input type="text" className='form-control w-auto' value={inputData.name} onChange={(e) => setinputData({ ...inputData, name: e.target.value })} />
            <br />
            <label htmlFor="">Username</label>
            <input type="text" className='form-control w-auto' value={inputData.username} onChange={(e) => setinputData({ ...inputData, username: e.target.value })} />
            <br />
            <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
            <hr />
            <h2>Update Put Method</h2>
            <label htmlFor="">Name</label>
            <input type="text" className='form-control w-auto' value={inputData.name} onChange={(e) => setinputData({ ...inputData, name: e.target.value })} />
            <br />
            <label htmlFor="">Username</label>
            <input type="text" className='form-control w-auto' value={inputData.username} onChange={(e) => setinputData({ ...inputData, username: e.target.value })} />
            <br />
            <button onClick={UpdateSubmit} className='btn btn-primary'>Update</button>
            <button onClick={DeleteSubmit} className='btn btn-primary'>Delete</button>
           




           

        </>
    )
}

export default AxiosMethods