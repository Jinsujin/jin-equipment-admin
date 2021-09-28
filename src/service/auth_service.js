import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.auth, authProvider);
  }

  // onUserChanged(사용자가 바뀌었을때 수행하는 함수)
  // 콜백 함수를 받아서 인증된유저정보와 함께 호출
  onAuthChange(onUserChanged) {
    this.auth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`Not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
