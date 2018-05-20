import dynamic from 'dva/dynamic';
import { createElement } from 'react';

let routerCache;

const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

const dynamicWrapper = (app, models, component) => {
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach(model => {
      if (modelNotExisted(app, model)) {
        app.model(require(`../models/${model}`).default);
      }
    });
    return props => {
      return createElement(component().default, {
        ...props
      });
    }
  }

  return dynamic({
    app,
    models: () =>
      models.filter(model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)),
    component:()=>{
      return component().then(raw=>{
        const Component = raw.default || raw;
        return props => createElement(Component,{
          ...props
        });
      })
    }
  })
}
export const routerConfig = app => [
  {
    path:"/",
    component:dynamicWrapper(app,['user'],()=>import('../routes/User'))
  },{
    path:"/login",
    component:dynamicWrapper(app,['login'],()=>import('../routes/Login'))
  },
]
