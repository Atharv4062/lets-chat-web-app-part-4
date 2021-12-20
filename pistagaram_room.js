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

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function add_room()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="pistagram_page.html"}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML= row;
      

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "pistagram_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}
    
