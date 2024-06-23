import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import './brandBar.css';

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    const handleBrandClick = (brand) => {
        if (device.selectedBrand.id === brand.id) {
            device.setSelectedBrand({}); // Сбросить выбор, если выбранный бренд нажат повторно
        } else {
            device.setSelectedBrand(brand); // Установить новый выбранный бренд
        }
    };
    return (
        <ul className="list-group list-group-horizontal"> 
            {device.brands.map(brand =>
                <li
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className={`p-3 ${brand.id === device.selectedBrand.id ? 'font-weight-bold' : ''}`}
                    onClick={() => handleBrandClick(brand)}
                >
                    {brand.name}
                </li>
            )}
        </ul>
    );
});

export default BrandBar;