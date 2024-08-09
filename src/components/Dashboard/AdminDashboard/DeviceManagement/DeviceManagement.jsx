// import React from "react";
// import "./style/devicemanagement.css";
// import { Link } from "react-router-dom";

// const DeviceManagement = () => {
//   return (
//     <div>
//       <div
//         className="card shadow-none position-relative overflow-hidden mb-4"
//         style={{ background: "var(--primary-color-light)" }}
//       >
//         <div className="card-body px-4 py-3">
//           <div className="row">
//             <div className="col-9 text-start">
//               <h4 className="fw-semibold mb-8">Greenhouse Automation Management</h4>
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="/admin/dashboard" className="text-muted text-decoration-none">
//                     Home
//                     </Link>
//                   </li>
//                   <li className="breadcrumb-item">
//                     <Link to="" className="text-muted text-decoration-none">
//                       Device Management
//                     </Link>
//                   </li>
                  
//                 </ol>
//               </nav>
//             </div>
//             <div className="col-3 text-end">
//               <img src="/src/assets/fao_logo.png" width="70px"   alt="FAO" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="device-management-content">

//       </div>




//       <div className="card mb-5">
//         <div className="card-body">
//           <div className="device-nav mt-5">
//             <NavLink
//               to="device-list"
//               className={({ isActive }) =>
//                 isActive ? "device-nav_link active" : "device-nav_link"
//               }
//             >
//               All Devices
//             </NavLink>
//             <NavLink
//               to="pin-registration"
//               className={({ isActive }) =>
//                 isActive ? "device-nav_link active" : "device-nav_link"
//               }
//             >
//               Pin Registration
//             </NavLink>
//             <NavLink
//               to="create"
//               className={({ isActive }) =>
//                 isActive ? "device-nav_link active" : "device-nav_link"
//               }
//             >
//               Create Device
//             </NavLink>
//           </div>
//           <div className="device-content mt-5">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeviceManagement;
