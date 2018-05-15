import dva from 'dva';
import dynamic from 'dva/dynamic'
import './index.css';
// 1. Initialize
const app = dva({
  initialState: {
    products: [
      {
        name: 'dva',
        id: 1
      }, {
        name: 'antd',
        id: 2
      }
    ]
  }
});
export default app;

// 2. Plugins app.use({});

// 3. Model
// Object
//   .values(require('./models').default)
//   .forEach(m => app.model(m));
// console.log(import('./models/products'))
// console.log(require('./models/products').default)
app.model(require('./models/products').default)
app.model(require('./models/example').default)
app.model(require('./models/user').default)


// 4. Router
app.router(require('./router').default);


// 5. Start
app.start('#root');


