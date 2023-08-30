import React from 'react'

const ContactCard = (props) => {

    let { selectedcontact } = props;

    return (
        <>
            {/* <pre>{JSON.stringify(props.selectedcontact)}</pre> */}
            {
                Object.keys(selectedcontact).length > 0 &&
                <div className="card shadow-lg rounded-2 ">
                    <div className="card-header text-white text-center m-0 p-1">
                        <img src={selectedcontact.image} alt="" className='img-fluid rounded-2' />
                    </div>

                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item"><span className='fw-bold text-success'>Name :</span> {selectedcontact.name}</li>
                            <li className="list-group-item"><span className='fw-bold text-success'>Phone :</span> {selectedcontact.phone}</li>
                            <li className="list-group-item"><span className='fw-bold text-success'>Email :</span> {selectedcontact.email}</li>
                            <li className="list-group-item"><span className='fw-bold text-success'> Address :</span> {selectedcontact.address}</li>
                            <li className="list-group-item"><span className='fw-bold text-success'>Country :</span> {selectedcontact.country}</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default ContactCard;