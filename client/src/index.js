import React, {createContext} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasketStore from './store/BasketStore';
import './components/styles/common.css';
import './components/styles/reset.css';

export const Context = createContext(null)
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
        basket: new BasketStore()
    }}>
        <App />
    </Context.Provider>
);
