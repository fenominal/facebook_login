import firebase from "../config/config-firebase";

const socialMediaAuth = () => {
    return firebase.auth().sigInWithPopup(provider).then((res)=>
    {
        return res.user;
    }).catch((er)=>{
        return er;
    })
};

export default socialMediaAuth;