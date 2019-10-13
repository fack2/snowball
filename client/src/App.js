import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CategoryPledges from './components/CategoryPledges'
import PledgePage from './components/PledgePage'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route path='/dashboard/action-category/:category_id' component={CategoryPledges} />
      <Route path='/dashboard/action-category/pledge/:action_name' component={PledgePage} />
    </React.Fragment>
  </Router>
)

export default App
