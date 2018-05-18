import Mock from 'mockjs'

const Random = Mock.Random

const loginSuccess = Mock.mock({
  'token': Random.string('lower',32),
  'status': 'success',
})

const loginFail = Mock.mock({'nickname': null, 'username': null, 'avatar': null, 'status': 'failure', 'message': '用户名或密码不正确'})

export default {
  [`post /apiv1/user/login`](req, res) {
    console.log(req)
    if(req.body.username === 'sakura' && req.body.password === 'killer'){
      res.json(loginSuccess)
    }else{
      res.json(loginFail)
    }
  }
}
