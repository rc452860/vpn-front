import request from '../utils/request';
import {stringfy} from 'qs';

export const login = param => request('/apiv1/user/login',{
    method:'POST',
    body:param
})
