import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDGu-pwgkxPEPKXKWOku20OCOt0Q9x6ujc",
  authDomain: "cloth-db-a81de.firebaseapp.com",
  databaseURL: "https://cloth-db-a81de.firebaseio.com",
  projectId: "cloth-db-a81de",
  storageBucket: "cloth-db-a81de.appspot.com",
  messagingSenderId: "543546299217",
  appId: "1:543546299217:web:e08f923ef90ff15877f970",
  measurementId: "G-YJDXKJNR89"
}

export const createUserProfileDocument = async (userAuth, addititonalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`user/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addititonalData
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
