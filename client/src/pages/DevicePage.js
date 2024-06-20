import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();
    const {basket } = useContext(Context);
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
    }
    return (
        <Container className="mt-3">
            <Button variant="outline-success" onClick={() => navigate(SHOP_ROUTE)}>
                На главную
            </Button>
            {device && (
                <Row>
                    <Col md={4}>
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{device.name}</h2>
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{
                                    background: `url(${bigStar}) no-repeat center center`,
                                    width: 240,
                                    height: 240,
                                    backgroundSize: 'cover',
                                    fontSize: 64,
                                }}
                            >
                                {device.rating}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                        >
                            <h3>От: {device.price} руб.</h3>
                            <Button variant="outline-success" onClick={addToBasket}>Добавить в корзину</Button>
                        </Card>
                    </Col>
                </Row>
            )}
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) => (
                    <Row
                        key={index}
                        style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default DevicePage;
