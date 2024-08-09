// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import DataTable from "react-data-table-component";
// import { API_BASE_URL } from "../../../Api/auth";
// import Loading from "../../../Loading/Loading";
// import { toast } from "react-toastify";

// const DeviceList = () => {
//   const [deviceData, setDeviceData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const notifyDelete = (message) => {
//     toast.success(message, { position: "top-right", autoClose: 5000 });
//   };

//   const notifyDeleteError = (message) => {
//     toast.error(message, { position: "top-right", autoClose: 5000 });
//   };

//   const notifyError = (message) => {
//     toast.error(message, { position: "top-right", autoClose: 5000 });
//   };

//   useEffect(() => {
//     const fetchDeviceData = async () => {
//       try {
//         const response = await axios.get(
//           `${API_BASE_URL}/admin/device-management`
//         );
//         setDeviceData(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         notifyError("Failed to fetch user");
//         setLoading(false);
//       }
//     };
//     fetchDeviceData();
//   }, []);

//   // delete function
//   const handleDelete = async (id) => {
//     try {
//       // console.log("I am here");
//       const response = await axios.delete(
//         `${API_BASE_URL}/admin/device-management/delete?deviceId=${id}`
//       );
//       // console.log(response.status);
//       if(response.status === 200){
//         const updatedDeviceData = deviceData.filter((device) => device.id !== id);
//         setDeviceData(updatedDeviceData);
//         // console.log("successfully deleted");
//         // console.log("message after delete",response.data.message);
//         notifyDelete(response.data.message);

//       }else{
//         // console.log("failed to delete");
//       notifyDeleteError("Failed to delete device.");
//       }
      
//     } catch (error) {
//       // console.log("failed to delete",error);
//       notifyDeleteError("Failed to delete device.");
//     }
//   };

//   const columns = [
//     {
//       name: "Id",
//       selector: (row) => row.id,
//     },
//     {
//       name: "Serial_Number",
//       selector: (row) => row.serial_number,
//     },
//     {
//       name: "Device Name",
//       selector: (row) => row.name,
//     },
//     {
//       name: "Created_At",
//       selector: (row) => row.created_at,
//     },
//     {
//       name: "Assigned_To ",
//       selector: (row) => row.assigned_to,
//     },
//     {
//       name: "Actions ",
//       cell: (row) => (
//         <div>
//           <Link
//             to={`/admin/device-management/${row.id}`}
//             className="btn btn-outline-success btn-sm mx-1"
//           >
//             <i className="bx bxs-show"></i>
//           </Link>
//           <Link to={`/admin/device-management/update/${row.id}`} className="btn btn-outline-primary btn-sm mx-1">
//             <i className="bx bx-edit-alt"></i>
//           </Link>
//           <button
//             className="btn btn-outline-danger btn-sm mx-1"
//             onClick={() => handleDelete(row.id)}
//           >
//             <i className="bx bxs-trash-alt"></i>
//           </button>
//         </div>
//       ),
//     },
//   ];
//   const customStyles = {
//     headCells: {
//       style: {
//         fontSize: "18px",
//         fontWeight: "bold",
//       },
//     },
//     cells: {
//       style: {
//         fontSize: "16px",
//       },
//     },
//     rows: {
//       style: {
//         fontSize: "16px",
//       },
//     },
//   };

//   if (loading) {
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
//   }
//   return (
//     <div className="device-table">
//       <DataTable
//         columns={columns}
//         data={deviceData.map((device) => ({
//           id: device.id,
//           serial_number: device.serial_number,
//           name: device.name,
//           created_at: device.created_at,
//           assigned_to: device.assigned_to,
//         }))}
//         pagination
//         fixedHeader
//         customStyles={customStyles}
//       />
//     </div>
//   );
// };

// export default DeviceList;
