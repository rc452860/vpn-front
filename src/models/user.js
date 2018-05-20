export default{
  namespace:"user",
  state:{
    username:'',
    nickname:''
  },
  effects:{
      *getUserInfo({payload},{put,call}){
      }
  },
  reducers:{
      loginSuccess(){},
      loginError(){},
      showMessage(){},
      showLoding(){}
  }
}
