import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // onUserChanged(사용자가 바뀌었을때 수행하는 함수)
  // 콜백 함수를 받아서 인증된유저정보와 함께 호출
  onAuthChange(onUserChanged) {
    this.auth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    this.auth.signOut();
  }
}

export default AuthService;
