var firebaseConfig = {
  apiKey: "AIzaSyCb0vws8JY7fetYg7_QOrd2RhFLqWR59OY",
  authDomain: "studentdata-b567f.firebaseapp.com",
  databaseURL: "https://studentdata-b567f.firebaseio.com",
  projectId: "studentdata-b567f",
  storageBucket: "studentdata-b567f.appspot.com",
  messagingSenderId: "326522887676",
  appId: "1:326522887676:web:5bd1de72b59bf07d972679",
  measurementId: "G-B7H6QB3VC7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
database = firebase.database();
//retrieve data in firebase
var ref = database.ref('studentData');
ref.on('value',gotData, errData);

//push data in firebase
  var student1 = {
      studentNumber: 001
      name: "Francisco",
      score: 89
    }

  var student2 = {
        studentNumber: 002
        name: "John",
        score: 94
      }
 var student3 = {
          studentNumber: 003
          name: "Pancho",
          score: 76
        }

 var student4 = {
            studentNumber: 004
            name: "Shosta",
            score: 99
          }
var totalStudents = 4

for (var i=0; i< totalStudents; i++) {
  ref.push(data[i]);
}

//
// ref.push(data);
// ref.push(data2);
// ref.push(data3);
