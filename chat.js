// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

var firebaseConfig = {
    apiKey: "AIzaSyDc9zNgv8eDAf9wLLPhLaARykDnU-29JzY",
    authDomain: "hola-ghnp.firebaseapp.com",
    projectId: "hola-ghnp",
    storageBucket: "hola-ghnp.appspot.com",
    messagingSenderId: "60028652977",
    appId: "1:60028652977:web:d27f6e8cbc73442dd0c190"
  };
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



