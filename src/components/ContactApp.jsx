import React, { useState } from 'react'
import { ContactList } from './ContactList'
import ContactCard from './ContactCard'

const ContactApp = () => {

    const [state, setstate] = useState({
        Selectedcontacts : { }
    })

    let { Selectedcontacts } = state;

    const receiveContact = (contact) => {
        setstate({
            Selectedcontacts: contact
        })
    }
    return (
        <>
        {/* <pre>{JSON.stringify(Selectedcontacts)}</pre> */}
            <div className="container mt-5">
                <div className="row ">
                    <div className="col ">
                        <p className='text-success h1'>Contact App</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus temporibus accusamus natus sed at commodi numquam odio sit, itaque distinctio corporis dignissimos deserunt, quas dolor, ipsa magnam? Eligendi, dolor?</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-9">
                        <ContactList sendcontacts={receiveContact} />

                    </div>
                    <div className="col-md-3">
                        <ContactCard selectedcontact={Selectedcontacts}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactApp