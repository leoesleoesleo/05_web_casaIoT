 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBW0eG426adY8mthE9o8YTpqsO1mmsntDw",
    authDomain: "proyectoiot-e183e.firebaseapp.com",
    databaseURL: "https://proyectoiot-e183e.firebaseio.com",
    projectId: "proyectoiot-e183e",
    storageBucket: "proyectoiot-e183e.appspot.com",
    messagingSenderId: "485705359013",
    appId: "1:485705359013:web:3d92d49d2411063166b74c",
    measurementId: "G-HWB64Y0Y2V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var ref = firebase.database().ref('/');

  ref.on("value", function(snapshot){
  	var data = snapshot.val();
  	document.getElementById("temperatura").innerHTML = data.temperatura;
    console.log(data.temperatura);
  	document.getElementById("humedad").innerHTML = data.humedad;
    console.log(data.humedad);
  	document.getElementById("luz").innerHTML = data.luz;
  	document.getElementById("gas").innerHTML = data.gas;
  	document.getElementById("led").innerHTML = data.estadoLed;
  });
  
  function encender() {
  	firebase.database().ref('/').child('estadoLed').set("1");
	}

   function apagar() {
  	firebase.database().ref('/').child('estadoLed').set("0");
   }
	
