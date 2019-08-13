import {combineReducers} from 'redux'
import LoginReducers from './login_reducers'
import  SoldBooksReducers from './soldbook_reducers'
import  IstatisticReducers from './istatistic_reducers'
import BooksReducers from './book_reducers'
debugger
export default combineReducers({
    Istatistic:IstatisticReducers,
    Login:LoginReducers,
    Books:SoldBooksReducers,
    ABooks:BooksReducers
})
