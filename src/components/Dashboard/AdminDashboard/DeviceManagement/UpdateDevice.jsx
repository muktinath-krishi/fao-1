// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../../../Api/auth";
// import { toast } from "react-toastify";
// import Select from "react-select";
// import { useNavigate, useParams } from "react-router-dom";

// const UpdateDevice = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [deviceData, setDeviceData] = useState({});
//   const [activePins, setActivePins] = useState([]);
//   const [userData, setUserData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedPins, setSelectedPins] = useState([]);

//   const notifyUpdate = (message) => {
//     toast.success(message, { position: "top-right", autoClose: 5000 });
//   };

//   const notifyFailed = (message) => {
//     toast.error(message, { position: "top-right", autoClose: 5000 });
//   };

//   const notifyError = (message) => {
//     toast.error(message, { position: "top-right", autoClose: 5000 });
//   };

//   useEffect(() => {
//     const fetchDeviceData = async () => {
//       try {
//         const response = await axios.get(
//           `${API_BASE_URL}/admin/device-management/edit?deviceId=${id}`
//         );
//         setDeviceData(response.data.device);
//         setActivePins(response.data.device.active_pins);
//         const pinIds = response.data.device.active_pins.map(pin => pin.id);
//         setSelectedPins(pinIds);

//         setUserData(response.data.users);
//         setSelectedUser(response.data.device.assigned_to);
//       } catch (error) {
//         notifyError("Failed to fetch device");
//       }
//     };
//     fetchDeviceData();
//   }, [id]);

//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
//       border: "1px solid #787878",
//       boxShadow: "none",
//       "&:hover": {
//         border: "1px solid #aaa",
//       },
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       backgroundColor: state.isSelected
//         ? "#007bff"
//         : state.isFocused
//         ? "#e6f7ff"
//         : null,
//       color: state.isSelected ? "#fff" : "#000",
//       "&:active": {
//         backgroundColor: "#007bff",
//         color: "#fff",
//       },
//     }),
//   };

//   const options = userData.map((item) => ({
//     value: item.id,
//     label: `${item.name} (${item.phone_number})`,
//   }));

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDeviceData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSelectChange = (selectedOption) => {
//     setSelectedUser(selectedOption ? selectedOption.value : selectedUser);
//   };

//   const handlePinChange = (e) => {
//     const { id, checked } = e.target;
//     const pinId = parseInt(id);
//     setSelectedPins((prevSelectedPins) =>
//       checked
//         ? [...prevSelectedPins, pinId]
//         : prevSelectedPins.filter((pin) => pin !== pinId)
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Prepare the payload
//       const payload = {
//         user_id: selectedUser,
//         device_id: deviceData.id,
//         serial_number: deviceData.serial_number,
//         device_name: deviceData.name || "",
//         active_pins: JSON.stringify(selectedPins), // JSON encoded array of pin IDs
//       };

//       console.log(payload.active_pins); // Log to verify the format

//       // Send PUT request
//       const response = await axios.put(
//         `${API_BASE_URL}/admin/device-management/update?deviceId=${id}`,
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Notify success and redirect
//       notifyUpdate(response.data.message);
//       navigate("/admin/device-management/device-list");
//     } catch (error) {
//       notifyFailed("Failed to update device.");
//       console.error("Error during update:", error.response || error);
//     }
//   };

//   return (
//     <div className="col-lg-12 col-md-8 form-container p-0 mt-5 text-start d-flex justify-content-center">
//       <form
//         className="row farmer-form d-flex justify-content-start border-0"
//         onSubmit={handleSubmit}
//       >
//         <div className="col-md-3 col-12 form-group">
//           <label htmlFor="user_id" className="form-label">
//             User
//           </label>
//           <Select
//             options={options}
//             value={options.find((option) => option.value === selectedUser)}
//             onChange={handleSelectChange}
//             styles={customStyles}
//             placeholder={selectedUser}
//           />
//         </div>

//         <div className="col-md-3 col-12 form-group">
//           <label htmlFor="id" className="form-label">
//             Device Id
//           </label>
//           <input
//             type="text"
//             id="id"
//             value={deviceData.id || ""}
//             className="form-control border-secondary"
//             name="id"
//             placeholder="Device ID"
//             readOnly
//           />
//         </div>
//         <div className="col-md-3 col-12 form-group">
//           <label htmlFor="serial_number" className="form-label">
//             Serial Number
//           </label>
//           <input
//             type="text"
//             id="serial_number"
//             value={deviceData.serial_number || ""}
//             className="form-control border-secondary"
//             name="serial_number"
//             placeholder="Serial Number"
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="col-md-3 col-12 form-group">
//           <label htmlFor="device_name" className="form-label">
//             Device Name
//           </label>
//           <input
//             type="text"
//             id="device_name"
//             value={deviceData.name || ""}
//             className="form-control border-secondary"
//             name="name"
//             placeholder="Device Name"
//             onChange={handleInputChange}
//           />
//         </div>

//         {/* Device check boxes */}
//         <div className="assign-device d-flex gap-5 mt-4">
//           {activePins.map((item) => (
//             <div key={item.id} className="mb-3 form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input border-secondary"
//                 id={item.id}
//                 name={item.sensor}
//                 onChange={handlePinChange}
//                 checked={selectedPins.includes(item.id)}
//               />
//               <label className="form-check-label" htmlFor={item.id}>
//                 {item.sensor}
//               </label>
//             </div>
//           ))}
//         </div>

//         <div className="register-btn mt-4 d-flex justify-content-start">
//           <button type="submit" className="btn btn-primary">
//             Update Device
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateDevice;
