import lazyComponentLoader from  '../HOC/lazyLoad'
export const UserList = lazyComponentLoader(() => import("../pages/Users/UsersList"));
export const UserDetail = lazyComponentLoader(() => import("../pages/Users/UserDetail"));
