import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row, Col} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import './deviceList.css';

const DeviceList = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row className="d-flex device-list">
            {device.devices.map(device => (
                <Col md={4} key={device.id} className="device-column">
                    <DeviceItem device={device} />
                </Col>
            ))}
        </Row>
    );
});

export default DeviceList;
