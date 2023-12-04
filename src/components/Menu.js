import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import {Link, useLocation} from 'react-router-dom'

function Menu() {

  //const [paginaAtual, mudaPaginaAtual] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation().pathname;

  return (
    <div>
      <Navbar color="dark" dark expand="md" className='bg-black'>
        <Link to="/" className='navbar-brand'>CodeChef</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>Início</Link>
            </NavItem> 
            <NavItem>
              <Link to="/cardapio" className={location === '/cardapio' ? 'nav-link active' : 'nav-link'}>Cardápio</Link>
            </NavItem>
            <NavItem>
              <Link to="/contato" className={location === '/contato' ? 'nav-link active' : 'nav-link'}>Contato</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default Menu