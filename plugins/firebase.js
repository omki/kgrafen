import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyBrwZ_3HSDJPbYV33gVnTAoYF3p7mV9d1Q",
    authDomain: "kgrafen-485e3.firebaseapp.com",
    databaseURL: "https://kgrafen-485e3.firebaseio.com",
    projectId: "kgrafen-485e3",
    storageBucket: "kgrafen-485e3.appspot.com",
    messagingSenderId: "755575610405",
    appId: "1:755575610405:web:a5864a6b641d0412"
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
