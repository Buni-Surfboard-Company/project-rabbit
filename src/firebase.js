import { initializeApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged } from "firebase/auth"

import { getFunctions } from "firebase/functions"

import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
  databaseUrl: process.env.VUE_APP_DB_URL
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const apps = getApps()
const firebaseApp = !apps.length ? initializeApp(firebaseConfig) : apps[0]

const firebaseAuth = getAuth(firebaseApp)

const functions = getFunctions(firebaseApp)

const database = getDatabase(firebaseApp);

set(ref(database, 'jhbkjhbkjhbkkjnkjn/'), {
  username: "name",
  email: "email",
  profile_picture : "imageUrl"
});

const getCurrentUser = () => new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(firebaseAuth, user => {
        unsub()
        resolve(user )
    }, reject)
})

export {firebaseApp, functions, firebaseAuth, getCurrentUser}