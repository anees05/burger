$(function () {
    $("#bf").on("submit", function (event) {
        event.preventDefault();
        var burgerName = $("#burger-name").val().trim()
        $.ajax("/api/burgers", {
            type: "POST",
            data: { name: burgerName }
        }).then(function () {
            location.reload();
        });
    });

    $(".btn-burger").on("click", function () {
        var id = $(this).attr("data-id");

        if ($(this).hasClass("to-eat")) {
            var update = { devoured: true }
        } else {
            var update = { devoured: false }
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: update
        }).then(function () {
            location.reload();
        });
    });
});
