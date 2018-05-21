import Mock from 'mockjs'

const Random = Mock.Random

export default {
  'GET /apiv1/user':Mock.mock({
    username:'sakura',
    nickname:Random.name(),
    remainTime:'12天'
  })
}
