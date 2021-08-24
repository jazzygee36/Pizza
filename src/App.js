import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './components/indexFolder/index'
import {GlobalStyle} from './globalStyling'

const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  )
}

export default App
