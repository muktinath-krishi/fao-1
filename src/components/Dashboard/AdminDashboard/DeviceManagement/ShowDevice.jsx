import React,{useState, useEffect} from 'react'
import { API_BASE_URL } from '../../../Api/auth';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loading from "../../../Loading/Loading"



const ShowDevice = () => {
    const { id } = useParams();
    const [deviceData, setDeviceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        console.log("i am here");
        const response = await axios.get(`${API_BASE_URL}/admin/device-management?deviceId=${id}`);
        setDeviceData(response.data.device);
        console.log("show device:",response.data.device);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch admin data.');
        setLoading(false);
      }
    };

    fetchDeviceData();
  }, [id]);

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>
        <div>
            <div>
              <Link to="/admin/device-management/device-list">
                <i className='bx bx-arrow-back' ></i>
              </Link>
            </div>
            <div>
                <h1>Device Details</h1>
                <p>Id: {deviceData.id}</p>
                <p>Serial Number: {deviceData.serial_number}</p>
                <p>Name: {deviceData.name}</p>
                <p>Created_At: {deviceData.created_at}</p>
                <p>Assigned_At: {deviceData.assigned_to}</p>
                <p>Active Pins:</p>
                <p>Active Pins Id: {deviceData.active_pins.id}</p>

            </div> 
        </div>
      </div>
    </>
  );
}
  

export default ShowDevice

