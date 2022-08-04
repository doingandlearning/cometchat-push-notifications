importScripts("https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.21.0/firebase-messaging.js"
);

const FIREBASE_CONFIG = {
  // YOUR CONFIG HERE
};

// Initialize firebase in the service worker.
firebase.initializeApp(FIREBASE_CONFIG);

// Start Receiving Push Notifications when
// the browser tab is in the background or closed.
firebase.messaging();
