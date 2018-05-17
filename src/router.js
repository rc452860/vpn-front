import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {routerConfig} from './config/router'; 


// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={IndexPage} />
//         <Route path="/products" exact component={Products} />
//         <Route path="/login" exact component={Login}/>
//         <Route path="/test" exact component={require('./models/test')}/>
//       </Switch>
//     </Router>
//   );
// }

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
