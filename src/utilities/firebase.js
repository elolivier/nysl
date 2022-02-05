import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, set, onValue,
} from 'firebase/database';
import {
  getDownloadURL, getStorage, ref as storageRef, uploadBytes,
} from 'firebase/storage';
import { useState, useEffect } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC21DgD3ikM-B90yf9z7Stfl-ZjvHx8tn8',
  authDomain: 'nysl-react-9a7a4.firebaseapp.com',
  databaseURL:
    'https://nysl-react-9a7a4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nysl-react-9a7a4',
  storageBucket: 'nysl-react-9a7a4.appspot.com',
  messagingSenderId: '607625356254',
  appId: '1:607625356254:web:db08d02ffe004bc1bdf34f',
  measurementId: 'G-9PTH0HCJJB',
};

const app = initializeApp(firebaseConfig);

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(app), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(app));

export { firebaseSignOut as signOut };

export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(app), setUser);
  }, []);

  return [user];
};

const db = getDatabase();
export const storage = getStorage();

export const setData = (path, value) => {
  set(ref(db, path), value);
};

export const saveImage = (file, user, gameId, pictureNumber) => {
  const photoRef = storageRef(storage, `images/${file.name}`);
  uploadBytes(photoRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      setData(`/pictures/${gameId}/${`picture-${pictureNumber}`}`, {
        author: user.email,
        url: downloadURL,
        timestamp: Date.now(),
      });
    });
  });
};

export const useData = (path) => {
  const [data, setNewData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const messagesRef = ref(db, path);
    return onValue(
      messagesRef,
      (snapshot) => {
        const val = snapshot.val();
        setNewData(val);
        setLoading(false);
        setError(null);
      },
      (errorReceived) => {
        setNewData(null);
        setLoading(false);
        setError(errorReceived);
      },
    );
  }, [path]);

  return [data, loading, error];
};
