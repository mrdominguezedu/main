var firebaseConfig = {
  apiKey: "AIzaSyA4gB3i1bVsHRpxoMO7sKkqOPc3dijO9QQ",
  authDomain: "teacher-website-fall-2020.firebaseapp.com",
  databaseURL: "https://teacher-website-fall-2020.firebaseio.com",
  projectId: "teacher-website-fall-2020",
  storageBucket: "teacher-website-fall-2020.appspot.com",
  messagingSenderId: "395468481644",
  appId: "1:395468481644:web:8b92866892de19202fa449",
  measurementId: "G-KYQ2F1HSET"
};
if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
}
var uploadStatus = document.getElementById("uploadStatus");
var fileButton = document.getElementById("fileUpload");
var messageStatus = document.getElementById("message2");

fileButton.addEventListener("change", function(e) {
  messageStatus.innerHTML = "Audio has been uploaded!";
  uploadStatus.value = 100;
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref("audioFiles/"+file.name);
  var task = storageRef.put(file);


  task.on('state-changed',
    function progress(snapshot){
      var currentProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploadStatus.value = currentProgress;
      uploadStatus.style.wid
    },
    function error(err) {
      messageStatus.innerHTML = "Your audio was not uploaded";

      console.log(err);
    },
    function complete() {

    });
});
