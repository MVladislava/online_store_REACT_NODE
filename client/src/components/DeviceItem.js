import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import './deviceItem.css';
import Vector from '../assets/Vector.png';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  
  return (
    <div className="device-item" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <div className="device-card">
        <img
          className="device-image"
          src={process.env.REACT_APP_API_URL + device.img}
          alt={device.name}
        />
        <div className="device-info">
          <div className="device-name">{device.name}</div>
          <div className="device-rating">
            <span>{device.rating}</span>
            <img className="device-rating-icon" src={Vector} alt="rating" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceItem;
