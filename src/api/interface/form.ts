export namespace Login {
  // 注册
  export interface reqLoginForm {
    username: string;
    password: string;
    email: string;
  }
  // 登录
  export interface loginForm {
    username: string;
    password: string;
  }
}
