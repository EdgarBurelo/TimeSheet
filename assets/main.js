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
  var database = firebase.database();
  
  $("#submit").on("click",function() {
    event.preventDefault();
    name = $("#employeeName").val().trim();
    role = $("#employeeRole").val().trim();
    start = $("#startYear").val().trim();
    var randomFormat = "DD/MM/YYYY";
    convertedDate = moment(start, randomFormat);
    
    var dateRight = convertedDate._i;
    console.log(dateRight);
    monthlyRate = $("#monthlyRate").val().trim();
    //console.log(name+" "+role+" "+start+" "+monthlyRate);
    database.ref().push({
      name: name,
      role: role,
      start: dateRight, //timestamp
      monthlyRate: monthlyRate
    });
  }); 

  database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    
    // <h2 id="name-display">Jimmy John</h2>
    // <h4 id="email-display">Email: jimmy@john.edu</h4>
    // <h4 id="age-display">Age: 27</h4>
    // <p id="comment-display">I'm signing up, because I want to spread sandwiches to the world.</p>
    var tblRow = $("<tr>");
    var tblName = $("<td>");
    var tblRole = $("<td>");
    var tblStart = $("<td>");
    var tblMonthlyRate = $("<td>");
    var tblMonthlyWorked = $("<td>");
    var tblMonthlyTotaledBilled = $("<td>");
    

    tblName.text(snapshot.val().name);
    tblRole.text(snapshot.val().role);
    tblStart.text(snapshot.val().start);
    tblMonthlyRate.text(snapshot.val().monthlyRate);
    //tblMonthlyWorked.text("10");
    var date = snapshot.val().start;
    
    
    var months = -1 * moment(date).diff(moment(), "months");
    tblMonthlyWorked.text(months);
    tblMonthlyTotaledBilled.text(months*snapshot.val().monthlyRate);

    tblRow.append(tblName);
    tblRow.append(tblRole);
    tblRow.append(tblStart);
    tblRow.append(tblMonthlyWorked);
    tblRow.append(tblMonthlyRate);
    tblRow.append(tblMonthlyTotaledBilled);
    $("tbody").append(tblRow);


  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});
   
 
   
 
   
 
   
 
   
 
   
 
   
 
   
 
   
 
   
 
   
 
   
 
   
 
   
