const INITIAL_STATE = {
    islogin: false,
    token: "",
    err:""
}

export default (state = INITIAL_STATE, action) => {
    debugger
    if (action.type === "onLogin") {
        localStorage.setItem("idtoken", action.payload.usertoken);
        return {
            token: action.payload.usertoken,
            islogin: true,
            err:""
        }
    } else if (action.type === "loginError") {
            return {
                token: null,
                islogin: false,
                err:action.payload.status

            }
    } else if (action.type === "LOGGED") {
        return {
            token: action.payload.token,
            islogin: action.payload.islogin,
            err:""
        }
    } else if (action.type === "EXİT") {
        return INITIAL_STATE
    } else if (action.type === "Test") {
        debugger
        return action.payload
        debugger
    }
    return state
}
