import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo>
          <Link to="/">
            <img src="/images/logo.webp" alt="SM Construction Logo" />
          </Link>
        </Logo>
        <MainMenu>
          <li className="dropdown">
            <span>Corporate</span>
            <DropdownContent>
              <Link to="/about">About Us</Link>
              <Link to="/management">Management</Link>
              <Link to="/vision">Vision & Mission</Link>
              <Link to="/quality">Quality Policy</Link>
            </DropdownContent>
          </li>
          <li className="dropdown">
            <span>Projects</span>
            <DropdownContent>
              <Link to="/projects/ongoing">Ongoing Projects</Link>
              <Link to="/projects/completed">Completed Projects</Link>
              <Link to="/projects/real-estate">Real Estate Projects</Link>
            </DropdownContent>
          </li>
          <li className="dropdown">
            <span>Sectors</span>
            <DropdownContent>
              <Link to="/sectors/construction">Construction</Link>
              <Link to="/sectors/energy">Energy</Link>
              <Link to="/sectors/infrastructure">Infrastructure</Link>
            </DropdownContent>
          </li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </MainMenu>
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    height: 50px;
  }
`;

const MainMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: color 0.3s;

    &:hover {
      color: var(--secondary-color);
    }
  }

  .dropdown {
    position: relative;
    
    span {
      cursor: pointer;
      padding: 0.5rem 1rem;
    }
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  z-index: 1;

  a {
    display: block;
    padding: 12px 16px;
  }

  .dropdown:hover & {
    display: block;
  }
`;

export default Header; 