$(document).ready(function() {
    // Current time for jumbotron header
    var currentTime = moment();
    $(".currentDay").text(currentTime.format("dddd, MMMM Do"));

    var timeSlot = parseInt(currentTime.format("H"));
    var save = $(".saveBtn");
    var hour = $(".hour");
    

    $("textarea").each(function () {
        var listing = parseInt($(this).attr("id"));
        if (listing < timeSlot) {
            $(this).addClass("past");
        }

        if (listing == timeSlot) {
            $(this).addClass("present")
        }

        if (listing > timeSlot) {
            $(this).addClass("future")
        }
    });

});

