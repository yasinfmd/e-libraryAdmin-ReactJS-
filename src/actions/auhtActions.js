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
                    history.push("/Anasayfa")
                }else{
                    dispatch(
                        {
                            type: "loginError",
                            payload: res
                        }
                    )
                    history.push("/")
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
    localStorage.removeItem('idtoken');
    localStorage.removeItem('mail');
    return {
        type: "EXİT"
    }
}
