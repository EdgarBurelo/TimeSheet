  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7zNm3UlArhH5H-jZTlHH9KJlprKBtebU",
    authDomain: "timesheet-2881c.firebaseapp.com",
    databaseURL: "https://timesheet-2881c.firebaseio.com",
    projectId: "timesheet-2881c",
    storageBucket: "timesheet-2881c.appspot.com",
    messagingSenderId: "89991514141"
  };
  firebase.initializeApp(config);

  $("#submit").on("click",function() {
    event.preventDefault();
    name = $("#employeeName").val().trim();
    role = $("#employeeRole").val().trim();
    start = $("#startYear").val().trim();
    monthlyRate = $("#monthlyRate").val().trim();
    console.log(name+" "+role+" "+start+" "+monthlyRate);
   

  });