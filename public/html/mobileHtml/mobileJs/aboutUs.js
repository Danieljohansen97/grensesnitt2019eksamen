// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded.");
    // Toggle aboutBody
    // Needs refactoring
    document.getElementById("th1").addEventListener("click", () => {
        document.getElementById("tb1").classList.toggle("hideBody");
    });
    document.getElementById("th2").addEventListener("click", () => {
        document.getElementById("tb2").classList.toggle("hideBody");
    });
    document.getElementById("th3").addEventListener("click", () => {
        document.getElementById("tb3").classList.toggle("hideBody");
    });
    document.getElementById("th4").addEventListener("click", () => {
        document.getElementById("tb4").classList.toggle("hideBody");
    });


});