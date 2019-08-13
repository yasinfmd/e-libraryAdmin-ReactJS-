import lazyComponentLoader from  '../HOC/lazyLoad'
export const AuthorsDetail = lazyComponentLoader(() => import("../pages/Authors/AuthorsDetail"));
export const AuthorsList = lazyComponentLoader(() => import("../pages/Authors/AuthorsList"));
