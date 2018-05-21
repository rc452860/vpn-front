import {getNodes} from '../services/api'
import {prop} from '../utils/object'

export default{
  namespace:"nodes",
  state:{
    list:[]
  },
  effects:{
      *getNodes({payload},{put,call}){
        const {data} = yield call(getNodes);
        console.log(data)
        yield put({
          type:'initNodes',
          payload:{
            ...data
          }
        })
      }
  },
  reducers:{
    initNodes(state,{payload}){
      return{
        ...state,
        ...payload
      }
    }
  }
}
