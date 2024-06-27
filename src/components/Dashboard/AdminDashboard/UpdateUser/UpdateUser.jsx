import React from 'react'
import "./updateuser.css"
import { useParams } from 'react-router-dom';
import {Data} from "../UserList/UserData"

const UpdateUser = () => {
    const { id } = useParams();
    const farmerData = Data[0].farmerData.find(user => user.farmerId === id);
  return (
    <>
    <div className="updateuser mt-2 ms-4 mb-5">
        <div className="row updateuser-profile">
            <div className="col-md-4 profile-img">
                <img src={farmerData.farmerImg} alt={farmerData.farmerName} />
            </div>
            <div className="col-md-8 profile-details mt-2 text-start">
                <p>Name: <span>{farmerData.farmerName}</span></p>
                <p>Address: <span>{farmerData.farmerAdd}</span></p>
                <p>Phone Number: <span>{farmerData.farmerNumber}</span></p>
            </div>
        </div>

        {/* updateuser-greenhouse */}

        <div className="updateuser-greenhouse">
            


        </div>

    </div>
    
    </>
  )
}

export default UpdateUser
