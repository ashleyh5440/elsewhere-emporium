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
      <Container>
        <Link to="/"><h2>Elsewhere Emporium</h2></Link>
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

