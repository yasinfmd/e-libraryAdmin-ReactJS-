const INITIAL_STATE = {
    soldbooksList:[],
    soldBookDetail:[],
    err:""
}
export default (state = INITIAL_STATE, action) => {
    debugger
    if (action.type === "soldBooksList") {
        return {
            soldbooksList: action.payload,
            soldBookDetail: [],
            err:false
        }
    }
    else if(action.type ==="soldBooksDetail"){
        return {
            soldbooksList: [],
            soldBookDetail: action.payload,
            err:false
        }
    }
    else if (action.type === "soldBooksListErr") {
        return {
            soldbooksList: [],
            soldBookDetail: [],
            err:action.payload
        }
    }
    return state
}
