// ============================================================
//  Alhamd Packaging — Firebase Configuration
//  Uses Firebase Compat SDK (loaded via CDN in each HTML file)
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDmB-00m0HpRCKgHiogfeb069QjPyw2qqE",
  authDomain: "alhamd-packaging.firebaseapp.com",
  projectId: "alhamd-packaging",
  storageBucket: "alhamd-packaging.firebasestorage.app",
  messagingSenderId: "963649444504",
  appId: "1:963649444504:web:3ced735b4564862925ceed"
};

// Only initialize once (guard for pages that load this multiple times)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Global Firestore instance used by all pages
const db = firebase.firestore();
