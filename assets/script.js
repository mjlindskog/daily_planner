$(document).ready(function() {
    // Current time for jumbotron header
    var currentTime = moment();
    $(".currentDay").text(currentTime.format("dddd, MMMM Do"));

    var save = $(".saveBtn");
    var listItem = $("textarea").val();
    
    $("textarea").each(function () {
        // matches real time with all IDs in HTML which are in <textarea>
        var timeSlot = parseInt(currentTime.format("H"));
        var listing = parseInt($(this).attr("id"));

        // hours that have past within that day appear gray
        if(listing < timeSlot) {
            $(this).addClass("past");
        }

        // current hoour of the day will appear red
        if(listing == timeSlot) {
            $(this).addClass("present")
        }

        // hours yet to occur will appear green
        if(listing > timeSlot) {
            $(this).addClass("future")
        }

        // this is temporary, plan to condense, for now is functional
        $(save).click(function(event) {
            event.preventDefault;
            localStorage.setItem("9am", (nineText.val()));
            localStorage.setItem("10am", (tenText.val()));
            localStorage.setItem("11am", (elevenText.val()));
            localStorage.setItem("12pm", (twelveText.val()));
            localStorage.setItem("1pm", (thirteenText.val()));
            localStorage.setItem("2pm", (fourteenText.val()));
            localStorage.setItem("3pm", (fifteenText.val()));
            localStorage.setItem("4pm", (sixteenText.val()));
            localStorage.setItem("5pm", (seventeenText.val()));
        });
    });

    // another temporary stack of variables, need to condense into an array
    var nineText = $("#9");
    var tenText = $("#10");
    var elevenText = $("#11");
    var twelveText = $("#12");
    var thirteenText = $("#13");
    var fourteenText = $("#14");
    var fifteenText = $("#15");
    var sixteenText = $("#16");
    var seventeenText = $("#17");

    // this is in coordination with the setItem
    $(nineText).append(localStorage.getItem("9am"));
    $(tenText).append(localStorage.getItem("10am"));
    $(elevenText).append(localStorage.getItem("11am"));
    $(twelveText).append(localStorage.getItem("12pm"));
    $(thirteenText).append(localStorage.getItem("1pm"));
    $(fourteenText).append(localStorage.getItem("2pm"));
    $(fifteenText).append(localStorage.getItem("3pm"));
    $(sixteenText).append(localStorage.getItem("4pm"));
    $(seventeenText).append(localStorage.getItem("5pm"));
});

