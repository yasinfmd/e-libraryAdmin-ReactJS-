import lazyComponentLoader from  '../HOC/lazyLoad'
export const Dashboard = lazyComponentLoader(() => import("../pages/Dashboard/Dashboard"));


