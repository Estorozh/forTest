import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyABqR1dzSbukwRzjTdZrudDYcBTQUi3QUY",
    authDomain: "react-admin-753d6.firebaseapp.com",
    databaseURL: "https://react-admin-753d6.firebaseio.com",
    projectId: "react-admin-753d6",
    storageBucket: "react-admin-753d6.appspot.com",
    messagingSenderId: "609072833111",
    appId: "1:609072833111:web:6b6c134248d600ab70f912"
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	async login(email, password) {
		return await this.auth.signInWithEmailAndPassword(email, password)

	}

	logout() {
		return this.auth.signOut()
	}

	async register(email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: email.split('@')[0]
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
}

export default new Firebase()