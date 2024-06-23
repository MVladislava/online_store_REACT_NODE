import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import './navBar.css'

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate(); 

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <Navbar className="navBar">
            <Container>
                <Navbar.Brand as={NavLink} to={SHOP_ROUTE} style={{ color: 'black' }}>
                    GadgetWave
                </Navbar.Brand>
                {user.isAuth ? (
                    <Nav>
                        <button className='admin glow-on-hover' onClick={() => navigate(ADMIN_ROUTE)}>
                            Админ панель
                        </button>
                        <button className='glow-on-hover buttonExit' onClick={logOut} style={{ marginLeft: '15px' }}>
                            Выйти
                        </button>
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
