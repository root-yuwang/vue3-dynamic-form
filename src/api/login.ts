import http from "../api/index";

// 新增用户
export const addUser = (params: string | object | undefined) => {
    return http.post(`/api/register`, params);
  };
  
// 获取用户列表
export const getList = (params: string | object | undefined) => {
    return http.post(`/api/getUserList`, params);
  };
  