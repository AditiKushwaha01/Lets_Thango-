import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Interface for type safety (optional but recommended)
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  // ... other configuration properties
}

export const config = {
  logoCount: 5,
  // ... other properties
};

// Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDLNdKbjdxyVNdDooDYCBPIQyUE4Ff-JKI",
  authDomain: "thangovc-e2acf.firebaseapp.com",
  projectId: "thangovc-e2acf",
  storageBucket: "thangovc-e2acf.appspot.com",
  messagingSenderId: "302523474976",
  appId: "1:302523474976:web:bf280bc70c7375fe2b4845",
  measurementId: "G-1VY1NDGT13",
  servers: {
    iceServers: [
      {
        urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
      },
    ],
    iceCandidatePoolSize: 10,
  },
};

const DEV = true;  // Assuming development environment

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
