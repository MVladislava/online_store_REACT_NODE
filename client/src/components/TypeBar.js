import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';
import './typeBar.css'; // Импортируем файл стилей

const TypeBar = observer(() => {
    const { device } = useContext(Context);

    const handleTypeClick = (type) => {
        if (device.selectedType.id === type.id) {
            device.setSelectedType({}); 
        } else {
            device.setSelectedType(type);
        }
    };
    return (
        <div >
            {device.types.map(type => (
                <ul
                    className={`type-item ${type.id === device.selectedType.id ? 'active' : ''}`}
                    onClick={() => handleTypeClick(type)}
                    key={type.id}
                >
                    {type.name}
                </ul>
            ))}
        </div>
    );
});

export default TypeBar;
