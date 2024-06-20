import { makeAutoObservable } from 'mobx';

class BasketStore {
    basket = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToBasket(item) {
        this.basket.push(item);
    }

    removeFromBasket(id) {
        this.basket = this.basket.filter(item => item.id !== id);
    }

    clearBasket() {
        this.basket = [];
    }

    get totalPrice() {
        return this.basket.reduce((total, item) => total + item.price, 0);
    }
}

export default BasketStore;
