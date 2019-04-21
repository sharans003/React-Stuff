import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Writers from './components/Writers/Writers';
import ErrorPage from './components/ErrorPage/ErrorPage';
class App extends Component {
  /* Note: To start server:  ./node_modules/.bin/json-server --watch store.json --port 3004 */
  constructor() {
    super();
    this.state = {
      writers: []
    }
  }

  async componentDidMount() {
    const writers = await (await fetch(`http://localhost:3004/writers`)).json()        
    this.setState({ writers }); 
  }
  render() {
    const writers = this.state.writers;    
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/writers">Writers</Link>
            </li>        
          </ul>

          <Switch>
            <Route path="/" render={() => (<div>Home</div>)}  exact/>
            <Route path="/writers" render={(props) => (<Writers {...props} writers={writers}/>)} />
            <Route component={ErrorPage} />
          </Switch>

          <hr/>
        </Fragment>     
    </BrowserRouter>
     );
  }
}

export default App;
