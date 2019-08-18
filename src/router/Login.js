import lazyComponentLoader from  '../HOC/lazyLoad'
export const Login = lazyComponentLoader(() => import("../pages/Login/Login"));

