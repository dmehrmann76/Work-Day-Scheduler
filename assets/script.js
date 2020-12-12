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
    $("#time9 .input").val(localStorage.getItem("time9"));
    $("#time10 .input").val(localStorage.getItem("time10"));
    $("#time11 .input").val(localStorage.getItem("time11"));
    $("#time12 .input").val(localStorage.getItem("time12"));
    $("#time1 .input").val(localStorage.getItem("time1"));
    $("#time2 .input").val(localStorage.getItem("time2"));
    $("#time3 .input").val(localStorage.getItem("time3"));
    $("#time4 .input").val(localStorage.getItem("time4"));
    $("#time5 .input").val(localStorage.getItem("time5"));


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
                $(this).addClass("future");
                $(this).removeClass("present");
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