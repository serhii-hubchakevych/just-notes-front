import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/Home' 
import AdminPage from './pages/Admin'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/admin' component={AdminPage} />
                <Route component={AdminPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
