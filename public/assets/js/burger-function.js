$(function() {
    $(".devour").on("click", function(event) {

        event.preventDefault();

        var id = $(this).data("id");

        var newDevourState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("You have eaten the burger.");
                location.reload();
            }
        );
    });

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim()
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(
            function() {
                console.log(newBurger.burger_name + " added!");
                location.reload();
            }
        );
    });

});