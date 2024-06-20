import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
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
        <Pagination className="mt-3" >
            <Pagination.First onClick={() => device.setPage(1)}/>
            <Pagination.Prev onClick={handlePrev}/>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
            <Pagination.Next onClick={handleNext}/>
            <Pagination.Last onClick={() => device.setPage(pageCount)}/>
        </Pagination>
    );
});

export default Pages;
