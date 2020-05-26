/**
 *  App用户信息
 */
import {observable,action} from 'mobx';

class AppStore{
    @observable isLoginState = false; // 是否是登陆状态
    @observable token = "";

    @action
    updateLoginStatus = (isLogin) => {
        console.log("登陆状态发生改变");
        this.isLoginState = isLogin;
        if(isLogin){
            this.token = '111111111111111'
        }else {
            this.token = ''
        }

    }
}

export default new AppStore()