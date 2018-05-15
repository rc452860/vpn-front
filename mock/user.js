import Mock from 'mockjs'

const Random = Mock.Random

const loginSuccess = Mock.mock({
  'nickname': Random.cname(),
  'username': 'sakura',
  'avatar': Random.image('320x320'),
  'status': 'success',
  'message': null
})

const loginFail = Mock.mock({'nickname': null, 'username': null, 'avatar': null, 'status': 'failure', 'message': '用户名或密码不正确'})

export default {
  [`post /apiv1/user/login`](req, res) {
    console.log(req)
    if(req.body.username === loginSuccess.username && req.body.password === 'killer'){
      res.json(loginSuccess)
    }else{
      res.json(loginFail)
    }
  }
}
