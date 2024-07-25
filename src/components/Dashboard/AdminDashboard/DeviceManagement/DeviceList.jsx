import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { API_BASE_URL } from '../../../Api/auth'
import Loading from '../../../Loading/Loading'

const DeviceList = () => {
    const [deviceData, setDeviceData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [deviceId, setDeviceId] = useState();


    useEffect(()=>{
        const fetchDeviceData = async()=>{
            try {
                const response = await axios.get(`${API_BASE_URL}/admin/device-management`);
                setDeviceData(response.data.data);
                setDeviceId(response.data.data.id);
                setLoading(false);
              } catch (error) {
                setError('Failed to fetch admin data.');
                setLoading(false);
              }
        }
        fetchDeviceData();
        },[]);

        const columns = [
            {
                name:"Id",
                selector:row=>row.id,
            },
            {
                name:"Serial_Number",
                selector:row=>row.serial_number,
            },
            {
                name:"Name",
                selector:row=>row.name,
            },
            {
                name:"Created_At",
                selector:row=>row.created_at,
            },
            {
                name:"Assigned_To ",
                selector:row=>row.assigned_to,
            },
            {
                name:"Actions ",
                cell: row => (
                    console.log("row id",row.id),
                    <div>
                        <Link to={`${row.id}`} className="btn btn-outline-success btn-sm mx-1">
                            <i className='bx bxs-show'></i>
                        </Link>
                        <Link className="btn btn-outline-primary btn-sm mx-1">
                            <i className='bx bx-edit-alt'></i>
                        </Link>
                        <button className="btn btn-outline-danger btn-sm mx-1">
                            <i className='bx bxs-trash-alt'></i>
                        </button>
                    </div>
                ),
            },
        ];
        const customStyles= {
            headCells: {
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                },
            },
            cells: {
                style: {
                    fontSize: '16px', 
                },
            },
            rows: {
                style: {
                    fontSize: '16px',
                },
            },

          }

        
        if (loading) {
            return <div><Loading /></div>;
          }
  return (
    <div className='device-table'>
        
        <DataTable
            columns={columns}
            data={
                deviceData.map(device =>({
                    id: device.id,
                    serial_number : device.serial_number,
                    name : device.name,
                    created_at : device.created_at,
                    assigned_to : device.assigned_to,
                   
                    
                }))
            }
            pagination
            fixedHeader
            customStyles={customStyles}
        />
    </div>
  )
}

export default DeviceList
