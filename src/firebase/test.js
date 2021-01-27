import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('XKkbLGLCFA75mQBmEZnA')
  .collection('cartItems')
  .doc('qwVxWzk7BspTM4HDqRmu');
firestore.doc('/users/XKkbLGLCFA75mQBmEZnA/cartItems/qwVxWzk7BspTM4HDqRmu');
firestore.collection('/users/XKkbLGLCFA75mQBmEZnA/cartItems');
