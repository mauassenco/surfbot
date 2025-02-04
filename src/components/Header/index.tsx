import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Styles
import * as Styles from './styles';

const Header = () => {
  const location = useLocation();
  return (
    <Styles.Header>
      {location.pathname === '/' && (
        <Styles.UpperBar>
          <p>Aulas na Praia Mansa de Sexta à Domingo das 06:00 às 14:00</p>
        </Styles.UpperBar>
      )}
      <Styles.NavBar>
        <img src="/surfbot-logo.svg" alt="surfbot logo" />
        <Styles.MenuContainer>
          <Styles.MenuItem>
            <Link to="/">Praia</Link>
          </Styles.MenuItem>
          <Styles.MenuItem>
            <Link to="/">Aulas</Link>
          </Styles.MenuItem>
          <Styles.MenuItem>
            <Link to="/">Contato</Link>
          </Styles.MenuItem>
          <Styles.MenuItem>
            <Link to="/matricula">Matricule-se</Link>
          </Styles.MenuItem>
        </Styles.MenuContainer>
      </Styles.NavBar>
    </Styles.Header>
  );
};

export default Header;
