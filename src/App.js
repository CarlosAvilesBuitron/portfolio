import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

//Views
import Dashboard from './views/Dashboard';
import About from './views/About';
import Contact from './views/Contact';

//Styles
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="wrapper">
          <header>
            <div id='logo'>Carlos Logo</div>
            <nav>
              <ul>
                  <li>
                    <NavLink to="/" exact activeClassName="selected">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/" activeClassName="selected">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact/" activeClassName="selected">Contact</NavLink>
                  </li>
                </ul>
            </nav>
          </header>
          <hr/>

          <main>
            <p>The content</p>
              <Route path="/" exact component={Dashboard} />
              <Route path="/about/" component={About} />
              <Route path="/contact/" component={Contact} />
          </main>

          <hr/>

        <footer>
          <p>The footer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
