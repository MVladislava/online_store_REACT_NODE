import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Button, Col, Container, ListGroup, Row, Alert } from 'react-bootstrap';
import './basket.css';  // Импортируйте CSS файл

const Basket = observer(() => {
    const { basket } = useContext(Context);
    const [error, setError] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => setError(null), 1000);  // Убираем сообщение после завершения анимации
            }, 2000);  // Держим сообщение на экране 3 секунды
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleClearBasket = () => {
        if (basket.basket.length === 0) {
            setError('Корзина пуста');
            setFadeOut(false);
            return;
        }
        setError(null);
        basket.clearBasket();
    };

    return (
        <div className="basket">
            <h1>Корзина</h1>
            {error && <Alert variant="danger" className={`error-message ${fadeOut ? 'fade-out' : ''}`}>{error}</Alert>}
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
            <button className="remove-button" onClick={handleClearBasket}>
                Очистить корзину
            </button>
        </div>
    );
});

export default Basket;
