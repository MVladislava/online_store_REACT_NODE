import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import DeleteType from "../components/modals/DeleteType";
import DeleteBrand from "../components/modals/DeleteBrand";
import DeleteDevice from "../components/modals/DeleteDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [delTypeVisible, setDelTypeVisible] = useState(false)
    const [delBrandVisible, setDelBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [delDeviceVisible, setDelDeviceVisible] = useState(false)
    return (
        <Container className="d-flex flex-column" style={{marginRight: 0}}>
            <Button
                variant={"outline-success"}
                className="mt-4 p-2 w-50"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-danger"}
                className="mt-4 p-2 w-50"
                onClick={() => setDelTypeVisible(true)}
            >
                Удалить тип
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-5 p-2 w-50"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-danger"}
                className="mt-4 p-2 w-50"
                onClick={() => setDelBrandVisible(true)}
            >
                Удалить бренд
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-5 p-2 w-50"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <Button
                variant={"outline-danger"}
                className="mt-4 p-2 w-50"
                onClick={() => setDelDeviceVisible(true)}
            >
                Удалить устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <DeleteType show={delTypeVisible} onHide={() => setDelTypeVisible(false)}/>
            <DeleteBrand show={delBrandVisible} onHide={() => setDelBrandVisible(false)}/>
            <DeleteDevice show={delDeviceVisible} onHide={() => setDelDeviceVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
