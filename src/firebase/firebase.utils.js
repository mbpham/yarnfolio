import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZQEwFLqrnB70XHrcozNXzkD756dY3_fc",
    authDomain: "yarnfolio-db.firebaseapp.com",
    databaseURL: "https://yarnfolio-db.firebaseio.com",
    projectId: "yarnfolio-db",
    storageBucket: "yarnfolio-db.appspot.com",
    messagingSenderId: "687365202888",
    appId: "1:687365202888:web:53f4eff5ca620a18a416fd",
    measurementId: "G-K7PQXEQ27Z"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)

    }
  }
  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
