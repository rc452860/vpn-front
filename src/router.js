import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {routerConfig} from './config/router'; 



const RouterConfig = ({history,app}) => {
  const routerData = routerConfig(app);
  return (
    <Router history={history}>
      <Switch>
        {
          routerData.map(r=>
              <Route key={r.path} path={r.path} exact component={r.component}/>
          )
        }
      </Switch>
    </Router>
  )
}

export default RouterConfig;
