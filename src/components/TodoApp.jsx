import React, { useState } from 'react'

const TodoApp = () => {

    const [activity, setactivity] = useState("");
    const [items, setitems] = useState([]);

    const inputtask = (e) => {
        setactivity(e.target.value)
    }

    const additem = () => {
        // setitems([...items, activity])
        // console.log(items)
        setitems((items) => {
            const newitems = [...items, activity]
            console.log(newitems)
            setactivity("")
            return newitems
          
        })
    }

    const deletetask = (index) => {
        const temp =items 
        temp.splice(index, 1)
        setitems([...temp])
    }
       


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card  shadow-lg">
                            <div className="card-header bg-warning text-success  ">
                                <h1 className="text-center text-success ">Todo App</h1>
                            </div>
                            <div className="card-body  ">
                                <div className="input-group mb-3">
                                    <input type="text" value={activity} className="form-control" onChange={inputtask} placeholder="Enter Item" />
                                    <button onClick={additem} className="btn btn-primary">Add</button>
                                </div>
                                <br />
                                <h3> Tasks</h3>
                                {items.length > 0 && items.map((item, index) => {
                                    return (
                                        <div className="input-group shadow-lg mb-3" key={index}>
                                            <input type="text" value={item} className="form-control" placeholder="Enter Tasks" />
                                            <button onClick={deletetask} className="btn btn-danger">Delete</button>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoApp