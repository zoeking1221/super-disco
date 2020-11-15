// diplay current date in header of page
$("#currentDay").append(moment().format('dddd') + ", " + moment().format('MMMM Do'));

// global variables
hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
textareaArray = ["#9amtext", "#10amtext", "#11amtext", "#12pmtext", "#1pmtext", "#2pmtext",
"#3pmtext", "#4pmtext", "#5pmtext"];


// save items to local storage
$(".saveBtn").on("click", function() {
    var hourId = $(this).attr("id");
    var textArea = $(this).siblings("textarea");
    var hourText = textArea.val().trim();
    localStorage.setItem(hourId, hourText);
    
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



// for each time block, compare current time to that of time block and color code accordingly:
// if current hour equal to time block hour, set time block to present 
// if current hour less than time block hour, set time block to future
// if current hour greater than time block hour, set time block to past
var currentHour = moment().hours();
for (var i = 0; i < hourArray.length; i++) {
    if (currentHour == hourArray[i]) {
        $(textareaArray[i]).addClass("present");
    }
    else if (currentHour < hourArray[i]) {
        $(textareaArray[i]).addClass("future");
    }
    else {
        $(textareaArray[i]).addClass("past");
    }
}


