import React from 'react';
import { connect } from 'dva';
import {Avatar,Layout,Spin,Icon } from 'antd';
import {nameToColor} from '../utils/color'
import styles from './styles/User.css';

const {Header,Content} = Layout;

@connect(({user,loading})=>({
  user,
  infoLoading:loading.effects['user/getUserInfo']
}))
export default class User extends React.Component{

  UNSAFE_componentWillMount() {
    this.bodyStyle = document.body.style;
    document.body.style.background = "#008573";
    document.body.style.color = "#FFF";

    const {dispatch} = this.props;
    dispatch({
      type:'user/getUserInfo'
    })
    dispatch({
      type:'nodes/getNodes'
    })
  }

  componentWillUnmount() {
    document.body.style = this.bodyStyle;
  }

  render(){
    
    const {infoLoading,user} = this.props;

    if(infoLoading){
      const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
      const {height,width} = window.screen;
      return (
        <div>
          <div style={{height,width,filter:'blur(5px)',textAlign:'center',position:'fixed'}}>
          </div>
          <Spin indicator={antIcon} style={{position:'fixed',left:(width/2-16),top:(height/2-16),zIndex:999}} size='large'/>
        </div>
        
      )
    }else if(!user.username){
      return (<p>没有找到该账户信息</p>)
    }else{
      const rgbObj = nameToColor(user.username);
      const rgb = `rgb(${rgbObj.r},${rgbObj.g},${rgbObj.b})`;
      return (<Layout style={{background:'none'}}>  
        <Header className={styles.vpn_header}>
            <div className={styles.vpn_avatar}>
              <Avatar style={{backgroundColor:rgb}}>
              {this.props.user.username[0]}
              </Avatar>
              <span  className={styles.vpn_namespan}>{this.props.user.username}</span>
            </div>
            <div className={styles.vpn_acc_info}>
              <span>剩余时间: {user.remainTime}</span>
            </div>
        </Header>
        <Content style={{paddingTop:'64px'}}>
          <p>sadsadad</p>
        </Content>
      </Layout>)
    }
  }
}
