import WSProvider from '../Provider/WSProvider'
export  const getAllBooks=(token,data)=>{
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Books",MN:"getAllBooks",param:data?data:null,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "allBooksList",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "allBookErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "allBookErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}
export  const getBookDetail=(token,param)=>{
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Books",MN:"getAllBooks",param,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "allBooksList",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "allBookErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "allBookErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}


