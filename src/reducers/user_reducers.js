const INITIAL_STATE = {
    userList:[],
    err:""
}
export default (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type) {
        case "userList":
            return {
                userList: action.payload,
                err:false
            }
        case "userErr":
            return {
                userList: [],
                err:action.payload
            }
    }
    return state
}
