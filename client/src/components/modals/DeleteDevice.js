import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {deleteDevice, fetchDevices} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const DeleteDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    // const [name, setName] = useState('')
    const delDevice = () => {
        deleteDevice(device.selectedDevice.id).then(data => {fetchDevices().then(data => device.setDevices(data.rows)); device.setSelectedDevice({ id: '', name: '' , price: '', rating: '', img:''}); onHide()})
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить девайс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedDevice.name || "Выберите девайс"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.devices.map(dev =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedDevice(dev)}
                                    key={dev.id}
                                >
                                    {dev.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={delDevice}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteDevice;
