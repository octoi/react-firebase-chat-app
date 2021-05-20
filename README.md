# REACT FIREBASE CHAT APP 💬
A chat app build using react 🌟 firebase 🔥

## SETUP 👷‍♂️

Create a firebase project

- https://console.firebase.google.com/
- Enable authentication and firestore
- Enable google auth provider in authentication 

Setup firebase in app

- create a new file named `firebaseConfig.js` in `/src/firebase/`
```bash
$ touch src/firebase/firebaseConfig.js
```
- fill it with firebase config
```javascript
const firebaseConfig = {
    // your firebase config
}

export default firebaseConfig;
```

Install dependencies
```bash
$ npm install
## or yarn
$ yarn install
```

Start the app
```bash
$ npm start
## or yarn
$ yarn start
```
