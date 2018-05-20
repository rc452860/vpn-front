import React from 'react';
import {Router, Route, Switch, routerRedux} from 'dva/router';
import {routerConfig} from './config/router';

function interceptor(app) {
  return function (location) {
    const {_store} = app;
    const {login} = _store.getState();
    console.log(app,location)
    console.log(location.pathname)
    if(location.pathname !== '/login' && (!login || login.status !== 'success')){
      _store.dispatch(routerRedux.push("/login"));
    }
  }
}

const RouterConfig = ({history, app}) => {
  const routerData = routerConfig(app);
  //设置拦截器
  history.listen(interceptor(app));
  return (
    <Router history={history}>
      <Switch>
        {routerData.map(r => <Route key={r.path} path={r.path} exact component={r.component}/>)
}
      </Switch>
    </Router>
  )
}

export default RouterConfig;
