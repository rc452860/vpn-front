import {login} from '../services/login'
import {routerRedux} from 'dva/router'

export default{
    namespace:"login",
    state:{
     status:null
    },
    effects:{
        *login({payload},{call,put}){
            const response = yield call(login,payload);
            yield(put({
                type:'changeLoginStatus',
                payload:{
                    status:response.data.status
                }
            }))
            // TODO 持久化token
            yield put(routerRedux.push('/'))
        }
    },
    reducers:{
      changeLoginStatus(state,{payload}){
          return {
              ...state,
              status:payload.status,
          }
      }
    }
}
  