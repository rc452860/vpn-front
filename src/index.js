import dva from 'dva';
import dynamic from 'dva/dynamic'
import createLoading from 'dva-loading'
import './index.css';
// 1. Initialize
const app = dva({
  initialState: {

  }
});


// 2. Plugins app.use({});
app.use(createLoading());


// 3. Model
// Object
//   .values(require('./models').default)
//   .forEach(m => app.model(m));
// app.model(require('./models/example').default)
// app.model(require('./models/user').default)


// 4. Router
app.router(require('./router').default);


// 5. Start
app.start('#root');

export default app;
