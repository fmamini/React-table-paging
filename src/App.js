import React from 'react'
import Tableposts from './Components/Tableposts/Tableposts'
import Postdetail from './Components/Postdetail/Postdetail'
import Customtable from './Components/Customtable/Customtable'
import history from './store/history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Tableposts} />
          <Route exact path="/postdetail" component={Postdetail} />
          <Route exact path="/customtable" component={Customtable} />
        </Switch>
      </Router>

    </div>


  );
}
export default App;
