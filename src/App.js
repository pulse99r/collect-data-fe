
import './App.css';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav'>
          <ul className='menu'>
            <li className='menu-item'>Data Entry</li>
            <li className='menu-item'>View Users</li>
          </ul>
        </nav>
      </header>
      <main>
        <form action="submit" id='form' className='form' >
          <input id='fname' type="text" placeholder="enter first name"/>
          <input id='lname' type="text" placeholder="enter last name"/>
          <input id='city' type="text" placeholder="enter city"/>
          <input id='website' type="text" placeholder="enter website"/>
          <span className="btn-group">
            <button id='submit' type="submit">Submit</button>
            <button id='clear' type="clear">Clear</button>
            <button id='upload' type="upload">Upload</button>
          </span>
        </form>
        <Users />
      </main>
    </div>
  );
}

export default App;
