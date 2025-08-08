import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-be8KnUmJawywLOT_T2qy5xUpZr-TUTs",
  authDomain: "trivia-fe7cd.firebaseapp.com",
  projectId: "trivia-fe7cd",
  storageBucket: "trivia-fe7cd.firebasestorage.app",
  messagingSenderId: "571103351750",
  appId: "1:571103351750:web:6d3d8ec4bbcd90d85418c7",
  measurementId: "G-KFDXH721Z1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);