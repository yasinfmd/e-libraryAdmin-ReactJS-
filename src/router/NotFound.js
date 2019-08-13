import lazyComponentLoader from  '../HOC/lazyLoad'
export const NotFound = lazyComponentLoader(() => import("../pages/404/404"));
/*export const Login=React.lazy(()=>import("../pages/Login/Login")
);*/
