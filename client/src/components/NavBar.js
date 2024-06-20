import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';


const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate(); 

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to={SHOP_ROUTE} style={{ color: 'white' }}>
                    КупиДевайс
                </Navbar.Brand>
                {user.isAuth ? (
                    <Nav className="ml-auto">
                        <Button variant="outline-primary" onClick={() => navigate(ADMIN_ROUTE)}>
                            Админ панель
                        </Button>
                        <Button variant="light" onClick={logOut} style={{ marginLeft: '5px' }}>
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button variant="outline-success" onClick={() => navigate(LOGIN_ROUTE)}>
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
