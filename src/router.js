import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/Login';
import App from './index'
import dynamic from 'dva/dynamic'

// const test = dynamic({
//   app:App,
//   models: () => [
//     import('./models/test'),
//   ],
//   component: () => import('./routes/test')
// })

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/login" exact component={Login}/>
        <Route path="/test" exact component={require('./models/test')}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
