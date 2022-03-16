var firebaseConfig = {
    apiKey: "AIzaSyCJuce4RSkorlbimu6HmO6PPmDZqQRrGkY",
    authDomain: "fanclub-b48b4.firebaseapp.com",
    projectId: "fanclub-b48b4",
    storageBucket: "fanclub-b48b4.appspot.com",
    messagingSenderId: "993895788834",
    appId: "1:993895788834:web:cc9861871a2fd05527b57b"
  };
  
  
  firebase.initializeApp(firebaseConfig);



function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding roomname"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "fanclug_page.html"
}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
        
                console.log("roomname -" + Room_names);

                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
            
          });
    });
}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="fanclub_page.html";
}
function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html"
}