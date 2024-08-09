// import React,{useState, useEffect} from 'react'
// import { API_BASE_URL } from '../../../Api/auth';
// import axios from 'axios';
// import { useParams} from 'react-router-dom';
// import Loading from "../../../Loading/Loading"

// const ShowDevice = () => {
//     const { id } = useParams();
//     const [deviceData, setDeviceData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDeviceData = async () => {
//       try {
//         // console.log("i am here");
//         const response = await axios.get(`${API_BASE_URL}/admin/device-management?deviceId=${id}`);
//         setDeviceData(response.data.device);
//         // console.log("show device:",response.data.device);
//         setLoading(false);
//       } catch (error) {
//         setError('Failed to fetch admin data.');
//         setLoading(false);
//       }
//     };

//     fetchDeviceData();
//   }, [id]);

//   if (loading) {
//     return <div><Loading/></div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <>
//       <div className='text-start'>
//         <div>
//             <div>
//                 <h4 className='mb-3'>Device Details</h4>
//                 <hr className="border border-secondary border-1 opacity-50" width="200px"/>
//                 <p>Device Id: {deviceData.id}</p>
//                 <p>Serial Number: {deviceData.serial_number}</p>
//                 <p>Device Name: {deviceData.name}</p>
//                 <p>Created_At: {deviceData.created_at}</p>
//                 <p>Assigned_At: {deviceData.assigned_to}</p>
//                 <h4 className='mt-5 mb-3'>Active Pins:</h4>
//                 <hr className="border border-secondary border-1 opacity-50" width="200px"/>
//                 {deviceData.active_pins.map(item=>(
//                   <div key={item.id} className="device-list d-flex flex-wrap gap-2">
//                     <p><b>Device Id:</b> {item.id}</p>
//                     <p><b>Pin No. :</b> {item.pin_no}</p>
//                     <p><b>Sensor:</b> {item.sensor}</p>
//                     <p><b>Status:</b> {item.status ?"Active":"Inactive"}</p>
//                   </div>

//                 ))}

//             </div> 
//         </div>
//       </div>
//     </>
//   );
// }
  

// export default ShowDevice

