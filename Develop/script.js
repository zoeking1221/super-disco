// diplay current date in header of page
$("#currentDay").append(moment().format('dddd') + ", " + moment().format('MMMM Do'));

// empty task array to add to from local storage
taskArray = ["", "", "", "", "", "", "", "", ""];


// when user clicks on save icon:
    // get value of text input
    // save to local storage 
    // add to taskArray
$("#9ambtn").on("click", function() {
    var hour9Text = $("#9amtext").val().trim();
    console.log(hour9Text);
    localStorage.setItem("9am", hour9Text);
    taskArray[0] = hour9Text;
});

$("#10ambtn").on("click", function() {
    var hour10Text = $("#10amtext").val().trim();
    console.log(hour10Text);
    localStorage.setItem("10am", hour10Text);
    taskArray[1] = hour10Text;
});

$("#11ambtn").on("click", function() {
    var hour11Text = $("#11amtext").val().trim();
    console.log(hour11Text);
    localStorage.setItem("11am", hour11Text);
    taskArray[2] = hour11Text;
});

$("#12pmbtn").on("click", function() {
    var hour12Text = $("#12pmtext").val().trim();
    console.log(hour12Text);
    localStorage.setItem("12pm", hour12Text);
    taskArray[3] = hour12Text;
});

$("#1pmbtn").on("click", function() {
    var hour1Text = $("#1pmtext").val().trim();
    console.log(hour1Text);
    localStorage.setItem("1pm", hour1Text);
    taskArray[4] = hour1Text;
});

$("#2pmbtn").on("click", function() {
    var hour2Text = $("#2pmtext").val().trim();
    console.log(hour2Text);
    localStorage.setItem("2pm", hour2Text);
    taskArray[5] = hour2Text;
});

$("#3pmbtn").on("click", function() {
    var hour3Text = $("#3pmtext").val().trim();
    console.log(hour3Text);
    localStorage.setItem("3pm", hour3Text);
    taskArray[6] = hour3Text;
});

$("#4pmbtn").on("click", function() {
    var hour4Text = $("#4pmtext").val().trim();
    console.log(hour4Text);
    localStorage.setItem("4pm", hour4Text);
    taskArray[7] = hour4Text;
});

$("#5pmbtn").on("click", function() {
    var hour5Text = $("#5pmtext").val().trim();
    console.log(hour5Text);
    localStorage.setItem("5pm", hour5Text);
    taskArray[8] = hour5Text;
});



// get items from local storage so that they reappear 
var loadTasks = function () {
    var hour9 = localStorage.getItem('9am');
    $("#9amtext").append(hour9);

    var hour10 = localStorage.getItem('10am');
    $("#10amtext").append(hour10);

    var hour11 = localStorage.getItem('11am');
    $("#11amtext").append(hour11);

    var hour12 = localStorage.getItem('12pm');
    $("#12pmtext").append(hour12);

    var hour1 = localStorage.getItem('1pm');
    $("#1pmtext").append(hour1);

    var hour2 = localStorage.getItem('2pm');
    $("#2pmtext").append(hour2);

    var hour3 = localStorage.getItem('3pm');
    $("#3pmtext").append(hour3);

    var hour4 = localStorage.getItem('4pm');
    $("#4pmtext").append(hour4);

    var hour5 = localStorage.getItem('5pm');
    $("#5pmtext").append(hour5);
}

loadTasks();




// // color code based on time of task vs time of day
//     if (moment().isBetween('22:00', '23:30')) {
//    console.log("working");
//     };
  
