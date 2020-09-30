var firebaseConfig = {
    apiKey: "AIzaSyAdfELYHM-bzLy3sWtoxgZEe3k8Kcipz1c",
    authDomain: "testing-d00a8.firebaseapp.com",
    databaseURL: "https://testing-d00a8.firebaseio.com",
    projectId: "testing-d00a8",
    storageBucket: "testing-d00a8.appspot.com",
    messagingSenderId: "354508995682",
    appId: "1:354508995682:web:0f4714ff810d070fd4e53b",
    measurementId: "G-9LP5MB77VZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);







document.getElementById('led_on').onclick = function LED(){
    console.log("led on");
    firebase.database().ref('LED').set({LED:"on"});

}


document.getElementById('led_off').onclick = function LED(){
    console.log("led off");
    firebase.database().ref('LED').set({LED:"off"});

}
