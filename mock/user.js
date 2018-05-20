import Mock from 'mockjs'

const Random = Mock.Random

const loginSuccess = Mock.mock({
  username:'sakura',
  nickname:Random.name()
})

const loginFail = Mock.mock({'status': 'failure','code':'01', 'message': '暂未登陆'})

export default {
  [`post /apiv1/user/login`](req, res) {
    if (req.body.username === 'sakura' && req.body.password === 'killer') {
      res.json(loginSuccess)
    } else {
      res.json(loginFail)
    }
  }
}
