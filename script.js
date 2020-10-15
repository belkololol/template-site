



$(".input-time").click(function(event) {
    $(".input-time").addClass('hidden'); 
    $(".timing").removeClass('hidden'); 
  });

  




$(function () {
    var date = new Date();
    date.setDate(date.getDate());

    $("#datepicker").datepicker({
        minDate: 0,
        maxDate: "+14D"
    });
});

$("#time").timeDropper({
    primaryColor: "#E8C300",
    borderColor: "#E8C300",
    setCurrentTime: false
});
