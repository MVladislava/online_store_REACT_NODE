import React, { useContext } from 'react';
import { Context } from '../index';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const Basket = observer(() => {
    const { basket } = useContext(Context);

    return (
        <Container className="mt-3">
            <h1>Корзина</h1>
            <ListGroup>
                {basket.basket.map((item) => (
                    <ListGroup.Item key={item.id}>
                        <Row>
                            <Col md={8}>
                                {item.name} - {item.price}₽
                            </Col>
                            <Col md={4} className="text-right">
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => basket.removeFromBasket(item.id)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h3 className="mt-3">Итого: {basket.totalPrice}₽</h3>
            <Button variant='info' onClick={basket.clearBasket} className="mt-3">
                Очистить корзину
            </Button>
        </Container>
    );
});

export default Basket;
