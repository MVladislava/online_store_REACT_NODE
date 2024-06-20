import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Vector from '../assets/Vector.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={200} height={200} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                <div>{device.name} </div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={16} height={16} style={{ marginLeft: '3px' }} src={Vector}/>
                    </div>
                </div>
                
            </Card>
        </Col>
    );
};

export default DeviceItem;
