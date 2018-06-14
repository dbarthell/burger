// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#newBurger").val().trim(),
      };
  
      // Send the POST request.
      $.post("/", newBurger).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $("#newBurger").val("");
  });