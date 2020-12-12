// load document in proper order
$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    // When save icon is pressed function begins
    $(".saveBtn").on("click", function() {
        // Defining where to pull data from to store in local storage
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".input").val();
        // Items to be set in local storage
        localStorage.setItem(time, text);
        
    })
    //each hours text area is saved into local storage
    $("#time8 .input").val(localStorage.getItem("time8"));
    $("#time9 .input").val(localStorage.getItem("time9"));
    $("#time10 .input").val(localStorage.getItem("time10"));
    $("#time11 .input").val(localStorage.getItem("time11"));
    $("#time12 .input").val(localStorage.getItem("time12"));
    $("#time13 .input").val(localStorage.getItem("time13"));
    $("#time14 .input").val(localStorage.getItem("time14"));
    $("#time15 .input").val(localStorage.getItem("time15"));
    $("#time16 .input").val(localStorage.getItem("time16"));
    $("#time17 .input").val(localStorage.getItem("time17"));


    //function that checks the current time
    function hourCheck() {
        var currentTime = moment().hour();
        
        $(".time-line").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("time")[1]);

            // an if else statement that assigns a css class to the current hour div for correct color code 
            if (hourBlock < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourBlock === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }    
        })
    }
    hourCheck();

})    