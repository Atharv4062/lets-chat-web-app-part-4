var firebaseConfig = {
      apiKey: "AIzaSyBPOa8A-QTDmVEIicu_TR6QYg2KYtDqXLM",
      authDomain: "pistagram-4d0d0.firebaseapp.com",
      databaseURL: "https://pistagram-4d0d0-default-rtdb.firebaseio.com",
      projectId: "pistagram-4d0d0",
      storageBucket: "pistagram-4d0d0.appspot.com",
      messagingSenderId: "46199975268",
      appId: "1:46199975268:web:7c0a1fa78e6b5ee6fade71"
    };
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name, 
                message:msg, 
                like:0
          });
          document.getElementById("msg").value="";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}
