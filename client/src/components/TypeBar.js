import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';
import './typeBar.css'; // Импортируем файл стилей

const TypeBar = observer(() => {
    const { device } = useContext(Context);

    const handleTypeClick = (type) => {
        if (device.selectedType.id === type.id) {
            device.setSelectedType({}); // Сбросить выбор, если выбранный тип нажат повторно
        } else {
            device.setSelectedType(type); // Установить новый выбранный тип
        }
    };
    return (
        <ul className="type-list">
            {device.types.map(type => (
                <li
                    className={`type-item ${type.id === device.selectedType.id ? 'active' : ''}`}
                    onClick={() => handleTypeClick(type)}
                    key={type.id}
                >
                    {type.name}
                </li>
            ))}
        </ul>
    );
});

export default TypeBar;
