$(document).ready(function() {
    $(".form-one").submit(function(event) {

      const lastName = $("#lastname").val().toUpperCase();
      const firstName = $("#firstname").val().toUpperCase();
      const otherName = $("#othername").val().toUpperCase();
let fullName = (`${lastName} ${firstName} ${otherName}`);

     $(".fullname").text(fullName);
   
  
      $("#story").toggle();

      event.preventDefault();
    });
  });