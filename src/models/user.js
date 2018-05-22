import {getUserInfo} from '../services/api'
import {prop} from '../utils/object'

export default{
  namespace:"user",
  state:{
    username:null,
    nickname:null,
    remainTime:null
  },
  effects:{
      *getUserInfo({payload},{put,call}){
        const {data} = yield call(getUserInfo);
        yield put({
          type:'initUserInfo',
          payload:{
            ...data
          }
        })
      }
  },
  reducers:{
    initUserInfo(state,{payload}){
      return{
        ...state,
        ...payload
      }
    }
  }
}
