import { Navbar, Nav } from 'react-bootstrap';
import ShoppingCart from './ShoppingCart';

interface NavProps {
  length: number;
}
const NavigationBar = ({ length }: NavProps) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#aboutus'>About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ShoppingCart length={length} />
    </Navbar>
  );
};

export default NavigationBar;
