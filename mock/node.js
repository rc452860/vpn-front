import Mock from 'mockjs'

const Random = Mock.Random

export default {
  'GET /apiv1/nodes':Mock.mock({
      'list|10':{
        node_name:'test',
        node_ip:'127.0.0.1',
        node_blance:'100%'
      }
  })
}
