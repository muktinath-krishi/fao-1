import React from 'react'
import { NavLink,Outlet,Link } from 'react-router-dom';
import "./userlist.css"
import { Data } from './UserData';


const UserList = () => {
  const farmerData = Data[0].farmerData;
  return (
    <>
    <div className="userlist">
      <div className="create-user d-flex justify-content-end align-items-center">
        <NavLink to="/admin/createuser" className="text-decoration-none">
          <button type="button" className='btn btn-primary d-flex gap-2 justify-content-center align-items-center'><i className='bx bx-plus nav_icon'></i>Create User</button>
        </NavLink>
      </div>
      <div className="userlist-table mt-5">
        <table className="table text-start">
          <thead className="table-light">
            <tr>
              <th scope="col">FarmerID</th>
              <th scope="col">Farmer Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">DeviceID</th>
              <th scope="col">Temperature</th>
              <th scope="col">Humidity</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              farmerData.map((item,index)=>(
                <tr key={index}>
              <th scope="row">{item.farmerId}</th>
              <td>{item.farmerName}</td>
              <td>{item.farmerAdd}</td>
              <td>{item.farmerNumber}</td>
              <td>{item.farmerDeviceId}</td>
              <td>{item.temperatureValue} &#176;C</td>
              <td>{item.humidityValue}</td>
              <td>{item.status === ("active" || "Active")?<button className='btn btn-success'>Active</button>:<button className='btn btn-warning'>Inactive</button>
                }
              </td>
                
              <td className='d-flex gap-2'><Link to={`/admin/updateuser/${item.farmerId}`}><button className='btn btn-primary'><i className='bx bx-edit-alt'></i></button></Link><button className='btn btn-danger'><i className='bx bxs-trash-alt'></i></button></td>
            </tr>

              ))
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default UserList
