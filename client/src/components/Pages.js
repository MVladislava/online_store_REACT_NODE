import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import './pages.css'; // Импортируем файл стилей

const Pages = observer(() => {
    const { device } = useContext(Context);
    const pageCount = Math.ceil(device.totalCount / device.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    const handleNext = () => {
        if (device.page < pageCount) {
            device.setPage(device.page + 1);
        }
    };

    const handlePrev = () => {
        if (device.page > 1) {
            device.setPage(device.page - 1);
        }
    };

    return (
        <div className="pagination-container">
            <button className="pagination-button" onClick={() => device.setPage(1)}>
                &#171; 
            </button>
            <button className="pagination-button" onClick={handlePrev}>
                &#8249; 
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    className={`pagination-item ${device.page === page ? 'active' : ''}`}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </button>
            ))}
            <button className="pagination-button" onClick={handleNext}>
                &#8250; 
            </button>
            <button className="pagination-button" onClick={() => device.setPage(pageCount)}>
                &#187; 
            </button>
        </div>
    );
});

export default Pages;
