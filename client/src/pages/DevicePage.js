import React, { useContext, useEffect, useState } from 'react';
import bigStar from '../assets/bigStar.png';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';
import './devicePage.css';
import '../components/navBar.css';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();
    const { basket } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchOneDevice(id);
                setDevice(data);
            } catch (error) {
                console.error('Error fetching device:', error);
            }
        };

        fetchData();
    }, [id]);

    const addToBasket = () => {
        basket.addToBasket(device);
    };

    return (
        <div className="mt-3">
            {device && (
                <div>
                    <button className="glow-on-hover back" onClick={() => navigate(SHOP_ROUTE)}>
                        На главную
                    </button>
                    <span className="deviceName">{device.name}</span>
                    <div className="details-container">
                        <img className="image" src={process.env.REACT_APP_API_URL + device.img} alt={device.name} />
                        <div>
                        <h1 className='title'>Характеристики</h1>
                            {device.info.map((info, index) => (
                            <ul className="characteristics" key={index}>
                                <span className="characteristics-title">{info.title}:</span>
                                <span className="characteristics-description">{info.description}</span>
                            </ul>
                            ))}
                        </div>
                        <div className="price-container">
                            <span className="price ">Цена: {device.price} руб.</span>
                            <button className="basketButton glow-on-hover" onClick={addToBasket}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DevicePage;
