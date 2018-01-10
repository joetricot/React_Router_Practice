import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Cat from './components/Cat'
import Dog from './components/Dog'
let Index = () => <h1>This is the Index Page done by Takle</h1>

let CatId = (props) => <p>You are on the page of {props.match.params.cat}</p>

let DogId = (props) => <p> You are on the page of {props.match.params.dog}</p>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main>
          <ul>
          <li><Link to='/'>Index</Link></li>
          <li><Link to='/cats'>Cats</Link></li>
          <li><Link to='/cats/tiger'>Tiger</Link></li>
          <li><Link to='/dogs'>Dogs</Link></li>
          <li><Link to='/dogs/germansheperd'>German Sheperd</Link></li>
          </ul>
          <Route exact path='/' component={Index} />
          <Route exact path='/cats' component={Cat}/>
          <Route exact path='/cats/:cat' component={CatId} />
          <Route exact path='/dogs' component={Dog}/>
          <Route exact path='/dogs/:dog' component={DogId} />
          </main>
        </div>
      </Router>

    );
  }
}

export default App;
