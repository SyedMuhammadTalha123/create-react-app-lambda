import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import Home from './Home';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Sidebar from './Sidebar';
import Hireme from './Hireme';
import Aboutme from './Aboutme';
import Startup from './Startup';
import Project from './Project';
import Footer from './Footer';
//import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Root extends React.Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route strict exact path="/" component={Home} />
          <Route strict exact path="/Aboutme" component={Aboutme} />
          <Route strict exact path="/Hireme" component={Hireme} />
          <Route strict exact path="/Startup" component={Startup} />
          <Route strict exact path="/Project" component={Project} />
        </Switch>
      </Router>


    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
