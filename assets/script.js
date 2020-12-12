// load document in proper order
$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    // When save icon is pressed function begins
    $(".saveBtn").on("click", function() {
        // Defining where to pull data from to store in local storage
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".input").val();
        // Items to be set in local storage
        localStorage.setItem(time, text);
        
    })
    //each hours text area is saved into local storage
    $("#calendar-row9 .input").val(localStorage.getItem("calendar-row9"));
    $("#calendar-row10 .input").val(localStorage.getItem("calendar-row10"));
    $("#calendar-row11 .input").val(localStorage.getItem("calendar-row11"));
    $("#calendar-row12 .input").val(localStorage.getItem("calendar-row12"));
    $("#calendar-row1 .input").val(localStorage.getItem("calendar-row1"));
    $("#calendar-row2 .input").val(localStorage.getItem("calendar-row2"));
    $("#calendar-row3 .input").val(localStorage.getItem("calendar-row3"));
    $("#calendar-row4 .input").val(localStorage.getItem("calendar-row4"));
    $("#calendar-row5 .input").val(localStorage.getItem("calendar-row5"));

    function hourCheck() {
        var currentTime = moment().hour();

        $(".time-line").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourBlock, currentTime)


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