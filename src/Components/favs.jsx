import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FavsCards from './favsCard';

function OffCanvasExample({ name, favs, removeFromFavs, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} className="h-100">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FavsCards removeFromFavs={removeFromFavs} favs={favs} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasExample;

