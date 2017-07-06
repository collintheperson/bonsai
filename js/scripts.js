$(document).ready(function(){

  $("#formOne").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var addressInput = $("input#address").val ();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".address").text(addressInput);

    $("#receipt").show();
    event.preventDefault();
  });
});
