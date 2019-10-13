import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import PledgePage from './components/PledgePage'

const App = () => {

  return (


    <div className="App">
      <Router>
        <React.Fragment>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/dashboard/action-category/:action_name' component={PledgePage} />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App
