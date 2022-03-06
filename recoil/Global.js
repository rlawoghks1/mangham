import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: {
    islogin: false,
    userid: 0,
    name: "",
    token: "",
  }
});
