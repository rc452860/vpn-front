import {login} from '../services/user'

export default{
    namespace:"login",
    state:{
     status:null
    },
    effects:{
        *login({payload},{call,put}){
            const response = yield call(login,payload);
            
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
  