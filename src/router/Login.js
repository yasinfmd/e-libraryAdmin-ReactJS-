import lazyComponentLoader from  '../HOC/lazyLoad'
export const Login = lazyComponentLoader(() => import("../pages/Login/Login"));
/*export const Login=React.lazy(()=>import("../pages/Login/Login")
);*/
