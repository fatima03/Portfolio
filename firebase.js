
/******** Firebase Configuration ********/

var firebaseConfig = {

    apiKey: "AIzaSyDlaitmmD9_yIw_XDWwEBekOa9ea2A7AfE",
    authDomain: "fm-portfolio-41011.firebaseapp.com",
    databaseURL: "https://fm-portfolio-41011.firebaseio.com",
    projectId: "fm-portfolio-41011",
    storageBucket: "fm-portfolio-41011.appspot.com",
    messagingSenderId: "778387058548",
    appId: "1:778387058548:web:96b25030077f7b9b9a4621",
    measurementId: "G-KE9ZLXJMSB"

};


/******** Firebase Initialization ********/

firebase.initializeApp(firebaseConfig);
firebase.analytics();


function saveToFirebase() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

  if( re.test(email) && !empty(name) && !empty(email) && !empty(subject) && !empty(message) ){                 
  
    var messageObject = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    var d = new Date();
    var n = d.getTime();
    
    // firebase.database().ref(email.replace(/[^a-zA-Z0-9]/g, '')).set(messageObject)
    
    firebase.database().ref(n).set(messageObject)
        .then(function() {
          console.log('Synchronization succeeded');
          document.getElementById("sent-message").style.display = "block";
          document.getElementById("sent-message").innerHTML = '<i class="icofont-verification-check"></i>  Your message has been sent. Thank you!';
        })
        .catch(function(error) {
          console.log(error);
          document.getElementById("error-message").style.display = "block";
          document.getElementById("error-message").innerHTML = 'Sorry messages cannot not be sent right now.';
        });
  }
}