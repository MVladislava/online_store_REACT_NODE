import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';
import { runInAction } from 'mobx';
import Basket from './Basket';

const Shop = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => {
            runInAction(() => {
                device.setTypes(data);
            });
        });
        fetchBrands().then(data => {
            runInAction(() => {
                device.setBrands(data);
            });
        });
        fetchDevices(null, null, 1, device.limit).then(data => {
            runInAction(() => {
                device.setDevices(data.rows);
                device.setTotalCount(data.count);
            });
        });
    }, [device, device.limit]);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
            runInAction(() => {
                device.setDevices(data.rows);
                device.setTotalCount(data.count);
            });
        });
    }, [device, device.page, device.selectedType, device.selectedBrand, device.limit]);

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={8}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
                <Col md={3}>
                    <Basket />
                </Col>
            </Row>
            <footer>
            <p>Developed by:</p>
                    <ul>
                        <li>Евгений Новосёлов — Back-End Engineer</li>
                        <li>Владислава Мясникова — Front-End Engineer</li>
                        <li>Елизавета Сидорова — Back-End Engineer</li>
                        <li>Никита Зубенин — Data Base Developer, Analyst</li>
                    </ul>
            </footer>
        </Container>
    );
});

export default Shop;
