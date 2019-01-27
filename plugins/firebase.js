import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyALc1120c_32LBEBXXg6pMIUMONZQabW7A',
    authDomain: 'testproject-cd3c7.firebaseapp.com',
    databaseURL: 'https://testproject-cd3c7.firebaseio.com',
    projectId: 'testproject-cd3c7',
    storageBucket: '',
    messagingSenderId: '891473916224'
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
