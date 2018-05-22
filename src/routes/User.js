import React from 'react';
import {connect} from 'dva';
import {
  List,
  Avatar,
  Layout,
  Spin,
  Icon,
  Button
} from 'antd';
import {nameToColor} from '../utils/color'
import styles from './styles/User.css';
import {Scrollbars} from 'react-custom-scrollbars';
import QueueAnim from 'rc-queue-anim';

const {Header, Content} = Layout;

@connect(({user, nodes, loading}) => ({user, nodes, infoLoading: loading.effects['user/getUserInfo'], nodeLoading: loading.effects['nodes/getNodes']}))
export default class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      connect: false
    }
    this.scrollBarRef = React.createRef();
  }
  UNSAFE_componentWillMount() {
    this.bodyStyle = document.body.style;
    document.body.style.background = "linear-gradient(to top, rgb(25, 91, 92) 0%, rgb(46, 185, 121) 100%) rgb(29, 151, 108)";
    document.body.style.color = "#FFF";
    /** 进制选中 */
    this.resize = () => {
      this.forceUpdate()
    }

    document.addEventListener('selectstart', this.selectStart, false);
    window.addEventListener('resize', this.resize, false);

    /** 请求数据 */
    const {dispatch} = this.props;
    dispatch({type: 'user/getUserInfo'})
    dispatch({type: 'nodes/getNodes'})
  }

  componentWillUnmount() {
    document.removeEventListener('selectstart', this.selectStart, false);
    window.removeEventListener('resize', this.resize, false);
    document.body.style = this.bodyStyle;
  }

  componentDidMount(){
    console.log(this.scrollBarRef)
  }

  selectStart(e) {
    e.preventDefault();
    return false;
  }

  connect() {
    this.setState({
      connect: !this.state.connect
    })
  }

  contentRender() {
    const {infoLoading, user, nodes, nodeLoading} = this.props;
    if (this.state.connect) {
      return (
        <p key="aab">
          <a
            onClick={() => this.connect()}
            style={{
            color: '#096dd9'
          }}>连接</a>
        </p>
      )
    } else {

      return (
        <List
          key="aaa"
          itemLayout='horizontal'
          loading={nodeLoading}
          dataSource={nodes.list}
          renderItem={item => (
          <div className={`${styles.vpn_item} clear`}>
            <div style={{
              float: 'left'
            }}>
              <p>节点: {item.node_name}</p>
              <p>节点ip: {item.node_ip}</p>
            </div>
            <div
              style={{
              float: 'right',
              textAlign: 'center'
            }}>
              <p>负载: {item.node_balance}</p>
              <p>
                ping: {item.node_ping}
              </p>
            </div>
          </div>
        )}></List>
      )
    }
  }

  render() {

    const {infoLoading, user, nodes, nodeLoading} = this.props;

    if (infoLoading) {
      const antIcon = <Icon type="loading" style={{
        fontSize: 24
      }} spin/>;
      const {height, width} = window.screen;
      return (
        <div>
          <div
            style={{
            height,
            width,
            filter: 'blur(5px)',
            textAlign: 'center',
            position: 'fixed'
          }}></div>
          <Spin
            indicator={antIcon}
            style={{
            position: 'fixed',
            left: (width / 2 - 16),
            top: (height / 2 - 16),
            zIndex: 999
          }}
            size='large'/>
        </div>
      )
    } else if (!user.username) {
      return (
        <p>没有找到该账户信息</p>
      )
    } else {
      const rgbObj = nameToColor(user.username);
      const rgb = `rgb(${rgbObj.r},${rgbObj.g},${rgbObj.b})`;
      const {height, width} = {
        height: document.body.offsetHeight,
        width: document.body.offsetWidth
      };
      return (
        <Layout style={{
          background: 'none'
        }}>
          <Header className={styles.vpn_header}>
            <div className={styles.vpn_avatar}>
              <Avatar style={{
                backgroundColor: rgb
              }}>
                {this.props.user.username[0]}
              </Avatar>
              <span className={styles.vpn_namespan}>{this.props.user.username}</span>
            </div>
            <div className={styles.vpn_acc_info}>
              <span>剩余时间: {user.remainTime}</span>
            </div>
          </Header>
          <Content
            style={{
            marginTop: '64px',
            height: `${height - 64}px`
          }}>
            <Scrollbars autoHide autoHideTimeout={300} ref={this.scrollBarRef}>
              <QueueAnim
              type={['right', 'left']}
              duration="450"
              onEnd={()=>{

              }}
              >
                {this.contentRender()}
              </QueueAnim>
            </Scrollbars>
          </Content>
        </Layout>
      )
    }
  }
}
