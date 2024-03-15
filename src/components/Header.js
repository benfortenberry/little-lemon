
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon } from '@fortawesome/fontawesome-free-solid'

function Header() {
  return (
    <header className='App-header'>
       <h1>
       <FontAwesomeIcon icon={faLemon} /> &nbsp;
        
        Little Lemon</h1>
      
      <nav>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
