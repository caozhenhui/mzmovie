import { CHANGE_USER_INFO } from './const';

export default {
    login ({commit}, {userName, password, callback}) {
        setTimeout( () => {
            if(userName === "1" && password === "1") {
                //登录成功
                let userInfo = {userId: 604641763, userName: '狗蛋儿'};
                commit( CHANGE_USER_INFO,userInfo );
                callback(1);
                return false;
            }
            callback(0);
        }, 1000)
    }
}