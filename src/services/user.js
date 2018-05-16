import request from '../utils/request';
import {stringfy} from 'qs';

export login = param => request('/apiv1/user/login',{
    method:'POST',
    body:param
})