import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='App-header'>
      <h1>
        <FontAwesomeIcon icon={faLemon} /> &nbsp; little lemon
      </h1>

      <nav>
        <ul>
          <li>
            <Link to={`/`}>HOME</Link>
          </li>
          <li>
            <Link to={`about`}>ABOUT</Link>
          </li>
          <li>
            <Link to={`contact`}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
