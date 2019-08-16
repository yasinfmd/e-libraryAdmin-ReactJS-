const INITIAL_STATE = {
    authorsList: [],
    authorsBook: [],
    err: ""
}
export default (state = INITIAL_STATE, action) => {
    debugger
    if (action.type === "authorsList") {
        return {
            authorsList: action.payload,
            authorsBook: [],
            err: false
        }
    } else if (action.type === "authorsBooks") {
        return {
            authorsList: state.authorsList,
            authorsBook: action.payload,
            err: false
        }
    }

    else if(action.type==="addAuthors"){
        return {
            authorsList:[],
            newAuthor:action.payload,
            authorsBook: [],
            err: false
        }
    }
    else if (action.type === "authorsErr") {
        return {
            authorsList: [],
            authorsBook: [],
            err: action.payload
        }
    }
    return state
}
