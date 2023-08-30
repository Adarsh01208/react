import React, { useState } from 'react'
import ContactService from '../Services/ContactService'

export const ContactList = (props) => {

    const [state, setstate] = useState({
        contacts: ContactService.getContactList()
    });

    let { contacts } = state;

    let clickcontact = (contact) => {  
        props.sendcontacts(contact) 
    //   alert( JSON.stringify(contact)) 
    }

    return (
        <>
            <table className='table table-hover table-striped text-center shadow-lg'>
                <thead className='table-dark'>
                    <tr>
                        <th>S.No</th> 
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <pre>{JSON.stringify(state)}</pre> */}
                    {
                        contacts.map((contact) => {
                            return (
                                <tr key={contact.sno} onClick={() => clickcontact(contact)}>
                                    <td>{contact.id}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.country}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>






        </>
    )
}
