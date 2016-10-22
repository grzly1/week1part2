// Knock Knock JS Code:

// replace .hide within the HTML
document.getElementById("joke-part2").classList.add("hide");
document.getElementById("button2").classList.add("hide");
document.getElementById("joke-part3").classList.add("hide");

// When user clicks first button, show second part
document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("joke-part2").classList.add("show");
    document.getElementById("button2").classList.add("show");
});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("joke-part3").classList.add("show");
    document.getElementById("button3").classList.add("show");
});

// replace .hide within the HTML
document.getElementById("joke-part5").classList.add("hide");
document.getElementById("button4").classList.add("hide");
document.getElementById("joke-part6").classList.add("hide");

// When user clicks first button, show second part
document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("joke-part5").classList.add("show");
    document.getElementById("button4").classList.add("show");
});

document.getElementById("button4").addEventListener("click", function() {
    document.getElementById("joke-part6").classList.add("show");
    document.getElementById("button5").classList.add("show");
});

// replace .hide within the HTML
document.getElementById("joke-part8").classList.add("hide");
document.getElementById("button6").classList.add("hide");
document.getElementById("joke-part9").classList.add("hide");

// When user clicks first button, show second part
document.getElementById("button5").addEventListener("click", function() {
    document.getElementById("joke-part8").classList.add("show");
    document.getElementById("button6").classList.add("show");
});

document.getElementById("button6").addEventListener("click", function() {
    document.getElementById("joke-part9").classList.add("show");
    document.getElementById("button8").classList.add("show");
});
