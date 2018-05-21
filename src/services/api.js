import request from '../utils/request';
import {stringfy} from 'qs';


export function query() {
  return request('/api/users');
}


export const login = param => request('/apiv1/user/login',{
    method:'POST',
    body:param
})

export const getUserInfo = param => request('/apiv1/user')

export const getNodes = () => request('/apiv1/nodes')