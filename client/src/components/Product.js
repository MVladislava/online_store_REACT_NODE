import React, { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
    const { addToBasket } = useContext(BasketContext);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    Цена: ${product.price}
                </Card.Text>
                <Button variant="primary" onClick={() => addToBasket(product)}>
                    Добавить в корзину
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Product;
