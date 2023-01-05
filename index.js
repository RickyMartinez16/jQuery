$("h1").css("color", "red")

$("button").click(() => {
    console.log("button clicked")
})

$("h1").click(() => {
    $("h1").css("color", "blue")
})

$("input").keypress((event) => {
    $("h1").text(event.key)
})