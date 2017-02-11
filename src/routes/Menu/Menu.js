import React from 'react';
import {Modal, Button, ButtonGroup} from 'react-bootstrap';
import {Link} from 'react-router';

import './Menu.scss';

export const Menu = () => (
    <ButtonGroup vertical block>
        <Link className="btn btn-info btn-lg" to='/bazal'>
            Bazálna potreba tekutín
        </Link>
    </ButtonGroup>
)

export default Menu;