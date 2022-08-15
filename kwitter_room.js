// ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVRWwMu4GewfTBYPEpeitkvcA7hKJSbkk",
  authDomain: "p101-26e7d.firebaseapp.com",
  databaseURL: "https://p101-26e7d-default-rtdb.firebaseio.com",
  projectId: "p101-26e7d",
  storageBucket: "p101-26e7d.appspot.com",
  messagingSenderId: "652285174591",
  appId: "1:652285174591:web:67e77535917fac45a0698a",
  measurementId: "G-XSLBCZJGVL",
};

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user",
  });
}

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML;
      Room_name.childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row =
        "<div class='room_name' id=" +
        Room_names +
        "onclick = 'redirect ToRoomName(this.id)'>#" +
        Rooms_names +
        "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name=message_data['name'];
  message=message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4> "+name+"</h4>";
  messgae_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
  like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick = 'updateLike(this.id)'>Likes ="+like+"</button>";
  span_with_tag = "span class='glyphicon glyphicon-thumbs-up'>Like = "+like+"</span></button></hr>";
  row = name_with_tag+message_with_tag+like_button+span_with_tag;


  row = name_with_tag + message_with_tag + like_button;4
  document.getElementById("output").innerHTML +=row;

//End code
} });  }); }
getData();

firebase.database().ref(room_name).pusj({
  name: user_name,
  message: msg,
  like: 0,
});
