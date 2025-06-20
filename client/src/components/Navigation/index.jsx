import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './style.css';

function Navigation({ routes }) {
    return (
        <Navbar>
          <Nav className="left">
            {routes.map((route) => (
            <Nav.Link 
              key={route.path}
              as={NavLink}
              to={route.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end>
              {route.name}
            </Nav.Link>
        ))}
          <div className="cart-box">
            {/* <p><strong>Cart</strong></p> */}
          </div>
          </Nav>
          {/* <div>cart</div> */}
        </Navbar>
    );
}

export default Navigation;