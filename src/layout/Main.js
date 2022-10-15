import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nav className=''>
                <Link className='p-2' to='/login'>Login</Link>
                <Link className='p-2' to='/register'>Register</Link>
            </Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;