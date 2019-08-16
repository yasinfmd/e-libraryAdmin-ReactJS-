import WSProvider from '../Provider/WSProvider'
export  const getAuthors=(token,data)=>{
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Authors",MN:"getAuthors",param:data?data:null,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "authorsList",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "authorsErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "authorsErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}
export  const addNewAuth=(token,data)=>{
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Authors",MN:"addAuthors",authorsData:data,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "addAuthors",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "authorsErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "authorsErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}
export  const getAuthorsBooks=(token,data)=>{
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Authors",MN:"getAuthorsBooks",param:data?data:null,token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "authorsBooks",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "authorsErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "authorsErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }
}


