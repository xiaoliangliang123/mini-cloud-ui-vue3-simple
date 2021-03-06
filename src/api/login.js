/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */
import request from '@/router/axios'
import store from '@/store'
import qs from 'qs'
import axios from "axios";

const scope = 'read'

export const loginByUsername = (uname, pwd) => {
  const grant_type = 'password';
  const client_id = 'test-auth-client';
  const client_secret = '123';
  const username = uname;
  const password = pwd;
  let dataObj = qs.stringify({'username': username, 'password': password,grant_type:grant_type,client_id:client_id,client_secret:client_secret})

  return request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    url: '/tanent/tanent/login?',
    data:dataObj
  })
  // return request({
  //   url: '/auth/oauth/token',
  //   headers: {
  //     isToken: false,
  //     Authorization: 'Basic cGlnOnBpZw==',
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   method: 'post',
  //   // params: { grant_type, scope,client_id,client_secret},
  //   params: { grant_type, scope,client_id,client_secret},
  //   data: dataObj
  // })
}

export const loginByMobile = (mobile, code) => {
  const grant_type = 'app'
  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      'Authorization': 'Basic YXBwOmFwcA=='
    },
    method: 'post',
    params: {mobile: mobile, code: code, grant_type}
  })
}

export const refreshToken = refresh_token => {
  const grant_type = 'refresh_token'
  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      Authorization: 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: {refresh_token, grant_type, scope}
  })
}

export const getUserInfo = () => {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}

export const logout = () => {
  return request({
    url: '/auth/token/logout',
    method: 'delete'
  })
}

/**
 * ??????????????????????????????????????????????????????
 * @param refreshLock
 */
export const checkToken = (refreshLock, $store) => {
  const token = store.getters.access_token

  request({
    url: '/auth/oauth/check_token',
    headers: {
      isToken: false,
      Authorization: 'Basic cGlnOnBpZw=='
    },
    method: 'get',
    params: {token}
  }).then(response => {
    const expire = response && response.data && response.data.exp
    if (expire) {
      const expiredPeriod = expire * 1000 - new Date().getTime()
      console.log('??????token????????????', expiredPeriod, '??????')
      //???????????????????????????
      if (expiredPeriod <= 30 * 60 * 1000) {
        if (!refreshLock) {
          refreshLock = true
          $store.dispatch('RefreshToken')
            .catch(() => {
              clearInterval(this.refreshTime)
            })
          refreshLock = false
        }
      }
    }
  }).catch(error => {
    console.error(error)
  })
}
