import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import PledgePage from './components/PledgePage'
import CategoryPledges from './components/CategoryPledges'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route path='/dashboard/action-category/:category_id' component={CategoryPledges} />
      <Route exact path='/dashboard/action-category/:action_name' component={PledgePage} />
    </React.Fragment>
  </Router>
)

export default App
