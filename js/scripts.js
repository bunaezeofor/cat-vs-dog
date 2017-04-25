$(document).ready(function() {
    $("button#woof").click(function() {
    $("ul#woof").prepend("<li>Woof!</li>");
    $("ul#meow").prepend("<li>Meow!</li>");
});

    $("button#meow").click(function() {
    $("ul#meow").prepend("<li>Meow!</li>");
    $("ul#woof").prepend("<li>Woof!</li>");
    });
});
