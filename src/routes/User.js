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
  }

  componentWillUnmount() {
    document.body.style = this.bodyStyle;
  }

  render(){
    const rgbObj = nameToColor(this.props.username);

    const {infoLoading} = this.props;

    const rgb = `rgb(${rgbObj.r},${rgbObj.g},${rgbObj.b})`
          if(infoLoading){
            const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
            return (
              <div className={styles.loading}>
                <Spin indicator={antIcon} size='large'/>
              </div>
            )
          }else{
            return (<Layout>
              <Header className={styles.vpn_header}>
                  <Avatar style={{backgroundColor:rgb}}>
                  {this.props.user.username[0]}
                  </Avatar>
                <span  className={styles.vpn_namespan}>{this.props.user.username}</span>
              </Header>
            </Layout>)
          }
  }
}
