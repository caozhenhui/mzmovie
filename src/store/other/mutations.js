import { CHANGE_USER_INFO, EXIT } from './const';

export default {
    [CHANGE_USER_INFO] (state, newuserInfo) {
        state.userInfo = newuserInfo;
        localStorage.userInfo = JSON.stringify(newuserInfo);
    },
    [EXIT] (state) {
        state.userInfo = {
            userId: null,
            userName:""
        }
        localStorage.userInfo = JSON.stringify(state.userInfo);
    }
}