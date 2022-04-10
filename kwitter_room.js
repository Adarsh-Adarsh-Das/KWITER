
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyDnFP8Rq_BguB5cHaZ9Qm-qaCV5aHBvq_4",
      authDomain: "kwiter-e41a9.firebaseapp.com",
      projectId: "kwiter-e41a9",
      storageBucket: "kwiter-e41a9.appspot.com",
      messagingSenderId: "587899414524",
      appId: "1:587899414524:web:850cb861780702973ff479"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
