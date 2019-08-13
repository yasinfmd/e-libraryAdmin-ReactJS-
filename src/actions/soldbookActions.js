import WSProvider from '../Provider/WSProvider'
export const getSoldBooks = (token,data) => {
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Books",MN:"getSoldBook",param:data?data:null,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "soldBooksList",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "soldBooksListErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "soldBooksListErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}


export const getSoldBooksDetail = (token,param) => {
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Books",MN:"getSoldBookDetail",param,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "soldBooksDetail",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "soldBooksListErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "soldBooksListErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}
