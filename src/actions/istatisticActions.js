import WSProvider from '../Provider/WSProvider'
export const getIstatistic = (token) => {
    debugger
    return async (dispatch) => {
        debugger
        await WSProvider.ajaxPost("",{SN:"Istatistic",MN:"getIstatistic",token}).then((res) => {
            if(res && res.status==200){
                dispatch(
                    {
                        type: "istatisticsList",
                        payload: res.data
                    }
                )
            }else{
                if(res!==""){
                    dispatch(
                        {
                            type: "istatisticsErr",
                            payload: res.status
                        }
                    )
                }else{
                    dispatch(
                        {
                            type: "istatisticsErr",
                            payload: "500"
                        }
                    )
                }

            }
        })
    }

}
