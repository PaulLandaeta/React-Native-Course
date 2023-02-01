import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC2Qq3mzPV6avaxfxeJj26HMkZE0_hIWNA',
  authDomain: 'products-34e09.firebaseapp.com',
  projectId: 'products-34e09',
  storageBucket: 'products-34e09.appspot.com',
  messagingSenderId: '607364901551',
  appId: '1:607364901551:web:d5d1e3a5771bafc9e4425a',
  measurementId: 'G-PDJ68HYC6E',
};

export const initFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(initFirebase);
export const db = getFirestore(initFirebase);
