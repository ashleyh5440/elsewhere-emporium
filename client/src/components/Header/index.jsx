import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import '../Header/style.css'
import { useContext } from 'react';

function Nav() {
  const { cartCount } = useContext(CartContext);

  return (
    <Navbar className="bg-body-tertiary">
      <Container className="header-box">
        <h2 style={{marginLeft: "50px"}}>Etsy Shop</h2>
        <h2 style={{marginLeft: "50px"}}>About</h2>
        <Link to="/"><h2>Home</h2></Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           {/* <Link to="/cart"><p>View Cart <span>{cartCount > 0 && `${cartCount}`}</span></p></Link> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;

