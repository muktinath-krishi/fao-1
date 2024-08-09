// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../../../Api/auth";
// import { toast } from "react-toastify";
// import Select from "react-select";
// import { useNavigate } from "react-router-dom";

// const CreateDevice = () => {
//   const navigate = useNavigate();
//   const [deviceData, setDeviceData] = useState([]);
//   const [devicePin, setDevicePin] = useState([]);
//   const [selectedPins, setSelectedPins] = useState([]);

//   const [formData, setFormData] = useState({
//     user_id: "",
//     device_id: "",
//     serial_number: "",
//     device_name: "",
//   });

//   const notifyCreated = (message) => {
//     toast.success(message, { position: "top-right", autoClose: 5000 });
//   };

//   const notifyError = (message) => {
//     toast.error(message, { position: "top-right", autoClose: 5000 });
//   };

//   useEffect(() => {
//     const fetchDeviceData = async () => {
//       try {
//         const response = await axios.get(
//           `${API_BASE_URL}/admin/device-management/create`
//         );
//         setDeviceData(response.data.users);
//         setDevicePin(response.data.pins);
//       } catch (error) {
//         notifyError("Failed to fetch user");
//       }
//     };
//     fetchDeviceData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSelectChange = (selectedOption) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       user_id: selectedOption ? selectedOption.value : "",
//     }));
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

//     const payload = {
//       user_id: formData.user_id,
//       device_id: formData.device_id.trim(),
//       serial_number: formData.serial_number.trim(),
//       device_name: formData.device_name.trim(),
//       active_pins: JSON.stringify(selectedPins),
//     };
//     console.log("payload from create device",payload.active_pins);

//     try {
     
//       await axios.post(
//         `${API_BASE_URL}/admin/device-management/store`,
//         payload
//       );
//       notifyCreated("Device created successfully");
//       navigate("/admin/device-management/device-list")
//     } catch (error) {
//       notifyError("Failed to create device");
//       console.error("Error:", error);
//     }
//   };

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

//   const options = deviceData.map((item) => ({
//     value: item.id,
//     label: `${item.name} (${item.phone_number})`,
//   }));

//   return (
//     <>
//       <div className="col-lg-12 col-md-8  form-container p-0 mt-5 text-start d-flex justify-content-center">
//         <form
//           className="row farmer-form d-flex justify-content-start border-0"
//           onSubmit={handleSubmit}
//         >
//           <div className="col-md-3 col-12 form-group">
//             <label htmlFor="user_id" className="form-label">
//               User
//             </label>
//             <Select
//               options={options}
//               onChange={handleSelectChange}
//               styles={customStyles}
//               placeholder="Select a user"
//             />
//           </div>

//           <div className="col-md-3 col-12 form-group">
//             <label htmlFor="device_id" className="form-label">
//               Device Id
//             </label>
//             <input
//               type="text"
//               id="device_id"
//               value={formData.device_id}
//               className="form-control border-secondary"
//               name="device_id"
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="col-md-3 col-12 form-group">
//             <label htmlFor="serial_number" className="form-label">
//               Serial Number
//             </label>
//             <input
//               type="text"
//               id="serial_number"
//               value={formData.serial_number}
//               className="form-control border-secondary"
//               name="serial_number"
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="col-md-3 col-12 form-group">
//             <label htmlFor="device_name" className="form-label">
//               Device Name
//             </label>
//             <input
//               type="text"
//               id="device_name"
//               value={formData.device_name}
//               className="form-control border-secondary"
//               name="device_name"
//               onChange={handleInputChange}
//             />
//           </div>

//           {/* device check box */}

//           <div className="assign-device d-flex gap-5 mt-4">
//             {devicePin.map((item) => (
//               <div key={item.id} className="mb-3 form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input border-secondary"
//                   value={item.sensor}
//                   id={item.id}
//                   name={item.sensor}
//                   onChange={handlePinChange}
//                 />
//                 <label className="form-check-label"  value={item.sensor} htmlFor={item.sensor}>
//                   {item.sensor}
//                 </label>
//               </div>
//             ))}
//           </div>

//           <div className="register-btn mt-4 d-flex justify-content-start">
//             <button type="submit" className="btn btn-primary">
//               Create Device
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateDevice;
