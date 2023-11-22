console.log("working..."),

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.footer-link');
    const movementSpeed = 3;
    
    const hoverLink = (event) => {
        let targetNode = event.target;

        const { left, top, width, height } = targetNode.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        let x = (centerX - event.pageX) / movementSpeed;
        let y = (centerY - event.pageY) / movementSpeed;
    
        targetNode.style.setProperty('--x', `${x}px`);
        targetNode.style.setProperty('--y', `${y}px`);
    }

    links.forEach(link => {
        link.addEventListener('mousemove', hoverLink);
    });
});

import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

  const firebaseConfig = {
    apiKey: "AIzaSyAwKjjrufdjQbuVuY22ysq4IuaHIFDxMy0",
    authDomain: "g1a1b1e.firebaseapp.com",
    projectId: "g1a1b1e",
    storageBucket: "g1a1b1e.appspot.com",
    messagingSenderId: "1012113335287",
    appId: "1:1012113335287:web:56f3cfbf052b09bf5284f2",
    measurementId: "G-8Q2DR0DTDW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);
