
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKpPae7OdSRFa-df1R98UN-6x4UMNl8K4",
  authDomain: "netflix-clone-c704e.firebaseapp.com",
  projectId: "netflix-clone-c704e",
  storageBucket: "netflix-clone-c704e.appspot.com",
  messagingSenderId: "858597188172",
  appId: "1:858597188172:web:f32a34156551db77584ae9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }