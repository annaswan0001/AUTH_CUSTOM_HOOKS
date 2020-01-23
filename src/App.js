import React from 'react';
import routes from './routes'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import NoMatch from './View/NoMatch'

function App() {
  
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <div className="App">
      <Switch>
       {routeComponents}
       <Route path="*">
            <NoMatch />
        </Route>
       </Switch>
    </div>
  );
}

export default App;
