import React from 'react'
// eslint-disable-next-line
import {Form, Icon, Input, Button, Checkbox} from 'antd'
import {connect} from 'dva'
import styles from './styles/Login.css'

const FormItem = Form.Item;


@connect(({login,loading})=>({
  login,
  submitting:loading.effects['login/login']
}))
@Form.create()
export default class Login extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super()
  }

  UNSAFE_componentWillMount() {
    this.bodyStyle = document.body.style;
    document.body.style.background = "#008573";
    document.body.style.color = "#FFF";
  }

  componentWillUnmount() {
    document.body.style = this.bodyStyle;
  }

  login = (e) => {
    e.preventDefault();
    const {validateFields} = this.props.form;
    const {dispatch} = this.props;
    validateFields((err,values)=>{
      if(!err){
        dispatch({
          type:'login/login',
          payload:{
            ...values
          }
        })
      }
    })
  }

  render() {
    const {getFieldDecorator,getFieldsError} = this.props.form;
    const {submitting,login} = this.props;
    return (
      <Form onSubmit={this.login} className={styles.from}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的用户名'
              }
            ]
          })(
            <Input
              className={styles.login_input}
              prefix={< Icon type = "user" style = {{ color: 'rgba(255,255,255,.5)' }}/>}
              placeholder="用户名"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码'
              }
            ]
          })(
            <Input
              className={styles.login_input}
              prefix={< Icon type = "lock" style = {{ color: 'rgba(255,255,255,.5)' }}/>}
              type="password"
              placeholder="密码"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className={styles.login_form_forgot} href="">忘记密码</a>
          <Button loading={submitting} type="primary" htmlType="submit" className={styles.login_form_button}>
            登陆
          </Button>
          <a href="">注册</a>
        </FormItem>
      </Form>
    )
  }
}
