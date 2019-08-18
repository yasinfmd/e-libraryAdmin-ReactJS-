import WSProvider from '../Provider/WSProvider'
export  const getUsers=(token,data)=>{
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Users",MN:"getUsers",param:data?data:null,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "userList",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "userErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "userErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}
export  const delUser=(token,data)=>{
    debugger
    return async (dispatch) => {
        debugger
         WSProvider.ajaxPost("",{SN:"Users",MN:"delUser",param:data?data:null,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "userList",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "userErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "userErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}

