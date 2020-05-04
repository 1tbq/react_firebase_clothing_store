import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCxcsSlcVD1_Ap43tMc2aCa4yRphQHJ6bI",
    authDomain: "react-shop-back.firebaseapp.com",
    databaseURL: "https://react-shop-back.firebaseio.com",
    projectId: "react-shop-back",
    storageBucket: "react-shop-back.appspot.com",
    messagingSenderId: "416372786103",
    appId: "1:416372786103:web:11edb3b85cf05cdd219e32",
    measurementId: "G-3X8QSCMEF7"
};

export const createUserProfileDocument = async (userAuth, addionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email}= userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...addionalData
            })
        } catch (error) {
            console.log('error creating user',error.message); 
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;