import lazyComponentLoader from  '../HOC/lazyLoad'
export const SoldBooks = lazyComponentLoader(() => import("../pages/SoldBooks/SoldBooks"));
export const SoldBooksDetail = lazyComponentLoader(() => import("../pages/SoldBooks/SoldDetail"));
export const BookList = lazyComponentLoader(() => import("../pages/SoldBooks/BookList"));
export const EditBook = lazyComponentLoader(() => import("../pages/SoldBooks/EditBook"));
