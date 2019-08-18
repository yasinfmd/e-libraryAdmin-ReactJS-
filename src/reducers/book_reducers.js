const INITIAL_STATE = {
    allBookList:[],
    err:""
}
export default (state = INITIAL_STATE, action) => {
    debugger
    if (action.type === "allBooksList") {
        return {
            allBookList: action.payload,
            err:false
        }
    }
    else if(action.type==="updatebook"){
        debugger
        return {
            allBookList:action.payload,
            updatedBook:action.payload,
            err: false
        }
    }
    else if (action.type === "allBookErr") {
        return {
            allBookList: [],
            err:action.payload
        }
    }
    return state
}
