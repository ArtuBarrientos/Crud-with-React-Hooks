import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () =>
    (
        <nav class="navbar navbar-light bg-light">
            <Link to='/'>
                <a className="navbar-brand">
                 <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                 Home
               </a>
            </Link>
        </nav>
    )

export default NavBar
