import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import '../Header/style.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Link to="/"><h2>Moonblood Studio</h2></Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Link to="/cart"><p>View Cart</p></Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;

// const Header = () => {
//   return (
//     <header>
//       <section className='nav-box'>
//         <Link to="/">
//           <h3>Moonblood Studio</h3>
//         </Link>
//         <Link to="/cart"><p>Veiw Cart</p></Link>
//       </section>
//     </header>
//   );
// };

// export default Header;
