import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (item) => {
        setBasket((prevBasket) => [...prevBasket, item]);
    };

    const removeFromBasket = (id) => {
        setBasket((prevBasket) => prevBasket.filter(item => item.id !== id));
    };

    const clearBasket = () => {
        setBasket([]);
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
            {children}
        </BasketContext.Provider>
    );
};
