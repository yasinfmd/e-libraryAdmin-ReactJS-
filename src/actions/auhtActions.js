import WSProvider from '../Provider/WSProvider'
import Component from '../Plugins/Component'
import history from '../history/history'
export const onLogin = (username, pass) => {
    debugger
    return async (dispatch) => {
        debugger
        let name=Component.urlParse("mail="+username);
      await WSProvider.ajaxPost("",{SN:"Login",MN:"onLogin",password:pass,username:name}).then((res) => {
                if(res.status==200){
                    dispatch(
                        {
                            type: "onLogin",
                            payload: res.data
                        }
                    )
                }else{
                    if(res!==""){
                        dispatch(
                            {
                                type: "loginError",
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
export const isLogin = (token) => {
    return {
        type: "LOGGED",
        payload: {
            token: token,
            islogin: token != "" ? true : false,
            err: ""
        }
    }
}

export const Quit = () => {
    localStorage.clear()
    return {
        type: "EXİT"
    }
}
