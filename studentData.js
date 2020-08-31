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

// Initialize Firebase
if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
}
 database = firebase.database();


 //push data in firebase
 // var ref = database.ref('studentData');
 // var index = 4
 //   var student = {
 //       boyScore: 0,
 //       moyScore: 0,
 //       eoyScore: 0,
 //       name: "noName",
 //       studentId: 0,
 //     }
 //
 //     var i;
 //     for (i = 0; i < 25; i++) {
 //       index += 1
 //       ref.push(student)+index;
 //
 //     }



// //retrieve data in firebase
var studentNumber = 0;

function clicked() {
  document.getElementById('pressedBtn').disabled = true;
    var studentNumber = document.getElementById('enter').value;
    var ref = database.ref('studentData');
    ref.on('value',gotData, errData);
    function gotData(data) {
      console.log(data.val());
      var students = data.val();
      var keys = Object.keys(students);
      var student1 = keys[studentNumber]

      var boyScore = students[student1].boyScore
      var moyScore = students[student1].moyScore
      var eoyScore = students[student1].eoyScore
      var name = students[student1].name
      var studentNo = students[student1].studentNumber

      console.log(boyScore);
      console.log(moyScore);
      console.log(eoyScore);
      console.log(name);
      console.log(studentNo);


//       Chart creation
         var color;
         var red = boyScore ; //BOY
         var blue = moyScore; // MOY
         var yellow = eoyScore; // EOY
          var ctx = document.getElementById('chart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['BOY', 'MOY', 'EOY'],
                datasets: [{
                label: 'Score Percentages for student number '+ name,
                data: [red, blue, yellow],
                backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 4
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

}




function errData(err) {
  console.log('Error!');
  console.log(err);
}

document.getElementById('pressedBtn').addEventListener('click', clicked);



function addData(chart, label, data) {

}
