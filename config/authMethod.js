import firebase from "./config-firebase";
export const facebookProider = firebase.auth.facebookAuthProvider();
export const githubProider = firebase.auth.githubAuthProvider();
export const googleProider = firebase.auth.googleAuthProvider();