import {login} from '../services/login'
import {routerRedux} from 'dva/router'
import * as store from '../utils/store'
import * as object from '../utils/object'
import {KEY} from '../utils/request'
import {message} from 'antd'

console.log(object)

export default {
  namespace : "login",
  state : {
    status: null
  },
  effects : {
    *login({
      payload
    }, {call, put}) {
      const response = yield call(login, payload);
      const token = object.prop('data', 'token')(response);
      const status = object.prop('data','status')(response);
      if(status != KEY.SUCCESS){
        message.error('登陆失败');
        return;
      }
      if (token) {
        // TODO 持久化token
        store.put(store.KEY.TOKEN, token);
        yield(put({
          type: 'changeLoginStatus',
          payload: {
            status: status
          }
        }));
        yield put(routerRedux.push('/'))
      } else {
        message.error('登陆失败,服务器未返回TOKEN');
        return;
      }
    }
  },
  reducers : {
    changeLoginStatus(state, {payload}) {
      return {
        ...state,
        status: payload.status
      };
    }
  }
}
