function leapYear(year) {
  if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }

}



$(document).ready(function() {
  $("#textForm").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $("#result").show();
    $("#yearSpan").text(year);

    if (!result) {
      $("#noSpan").text(" not");
    }

  });
});