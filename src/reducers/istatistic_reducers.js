const INITIAL_STATE = {
    istatistics:[],
    err:""
}
export default (state = INITIAL_STATE, action) => {
    debugger
    if (action.type === "istatisticsList") {
        return {
            istatistics: action.payload,
            err:false
        }
    } else if (action.type === "istatisticsErr") {
        return {
            istatistics: [],
            err:action.payload
        }
    }
    return state
}
