import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const MediNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Meditations App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="navlink ml-3" to="/meditationer">Meditationer</Link>
            </NavItem>
            <NavItem>
              <Link className="navlink ml-3" to="/tipsOchRådSida">Tips och råd</Link>
            </NavItem>
            <NavItem>
              <Link className="navlink ml-3" to="/omOssSida">Om oss</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MediNavbar;
