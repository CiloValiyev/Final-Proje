var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName("panel");
var panel1 = document.getElementsByClassName("panel1");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel1 = this.nextElementSibling;
        if (panel1.style.display === "block") {
        } else {
            panel.style.display = "block";
        }
    });
}

