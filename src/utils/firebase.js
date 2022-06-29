import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBFN38Xvmn6XVkcVFO5GVCEG15XYxRe6TA",

  authDomain: "musicfy-30c6e.firebaseapp.com",

  projectId: "musicfy-30c6e",

  storageBucket: "musicfy-30c6e.appspot.com",

  messagingSenderId: "794070393991",

  appId: "1:794070393991:web:937f6c722270424124c422",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth, app }
