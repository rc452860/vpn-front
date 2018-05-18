import dva from 'dva';
import dynamic from 'dva/dynamic'
import './index.css';
// 1. Initialize
const app = dva({
  initialState: {
   
  }
});
export default app;

// 2. Plugins app.use({});

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
