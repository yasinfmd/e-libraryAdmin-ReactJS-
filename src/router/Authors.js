import lazyComponentLoader from  '../HOC/lazyLoad'
export const AuthorsDetail = lazyComponentLoader(() => import("../pages/Authors/AuthorsDetail"));
export const AuthorsList = lazyComponentLoader(() => import("../pages/Authors/AuthorsList"));
export const AddAuthors = lazyComponentLoader(() => import("../pages/Authors/AddAuthors"));
