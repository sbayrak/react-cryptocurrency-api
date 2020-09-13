import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCB8vfppAazf1jBMgTkqFyjXd9ZDKbl3B4',
  authDomain: 'react-cryptocurrency.firebaseapp.com',
  databaseURL: 'https://react-cryptocurrency.firebaseio.com',
  projectId: 'react-cryptocurrency',
  storageBucket: 'react-cryptocurrency.appspot.com',
  messagingSenderId: '719246241075',
  appId: '1:719246241075:web:b360fda91ff19ac433e246',
  measurementId: 'G-9Q4W0C1601',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
