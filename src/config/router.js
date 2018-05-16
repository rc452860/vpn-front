import dynamic from 'dva/dynamic';

let routerCache;

const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

const dynamicWrapper = (app,models,component) => {
    
}
