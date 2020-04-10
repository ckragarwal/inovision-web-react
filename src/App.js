import React/*.homePage{*/
/*    background-image: url('../../assets/images/bkg.jpg');*/
/*    height: 100vh;*/
/*    width: 100vw;*/
/*    background-size: cover;*/
/*}*/,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import homePage from './Components/home-page/homePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <div className="content-wrap">
            <Switch>
              <Route path="/" component={homePage} exact/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
