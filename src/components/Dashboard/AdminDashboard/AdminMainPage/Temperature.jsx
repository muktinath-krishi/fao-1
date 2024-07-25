// import React from 'react'
// import "./temperature.css"
// // import { temperatureData } from './temphumiData'
// import { Data } from '../UserList/UserData'

// const Temperature = () => {
//   const temperatureData = Data[0].farmerData;

//   //change icon with temperature

//   const renderAlert = (item) => {
    
//     switch (item.tempInfo) {
//         case 'Cloudy':
//         case 'cloudy':
//             return <i className='bx bx-cloud text-secondary'></i>;
//         case 'Rainy':
//         case 'rainy':
//             return <i className='bx bx-cloud-rain text-dark'></i>;
//         case 'Windy':
//         case 'windy':
//             return <i className='bx bx-wind text-primary'></i>;
//         case 'Sunny':
//         case 'sunny':
//             return <i className='bx bxs-sun text-warning' ></i>;
//         default:
//             return null;
//     }
// };
//   return (
//     <>
//        <div className="admin-dashboard gap-5 mt-3">
//         {
//           temperatureData.map((item,index)=>(
//             <div key={index} className="col-md-2 gap-3 temperature-card">
//               <div className="temperature-title text-start">
//                 <p>{item.farmerAdd}</p>
//                 <p className='deviceid'>{item.farmerDeviceId}</p>
//               </div>
//               <div className="temperature-body">
//                 <div className="temp-icon">
//                   {renderAlert(item)}
//                 </div>
//                 <div className="temperature-value text-start">
//                   <p><span>{item.temperatureValue} &#176;C </span><br/>{item.tempInfo}</p>
//                 </div>
//               </div>
//             </div>

//           ))
//         }
      
//     </div>
//     </>
//   )
// }

// export default Temperature


import React from 'react'

const Temperature = () => {
  return (
    <div>
      <h1>temperature data</h1>
    </div>
  )
}

export default Temperature
