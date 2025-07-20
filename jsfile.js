let season1 = document.getElementById("season1");
let season2 = document.getElementById("season2");
let season3 = document.getElementById("season3");

let seasons1 = document.getElementById("seasons1");
let seasons2 = document.getElementById("seasons2");
let seasons3 = document.getElementById("seasons3");

let change = document.getElementById("change");

season1.addEventListener("click", function() {
    season2.style.backgroundColor = "black";
    season3.style.backgroundColor = "black";
    change.innerText = "SEASON 1";
   if (seasons1.style.display === "none") {
       seasons1.style.display = "block";
       seasons2.style.display = "none";
       seasons3.style.display = "none";
       season1.style.backgroundColor = "rgb(128, 0, 128)";
   } else {
       seasons1.style.display = "none";
       season1.style.backgroundColor = "";
   }
});

season2.addEventListener("click", function() {
    season1.style.backgroundColor = "black";
    season3.style.backgroundColor = "black";
    change.innerText = "SEASON 2";
   if (seasons2.style.display === "none") {
       seasons1.style.display = "none";
       seasons2.style.display = "block";
       seasons3.style.display = "none";
       season2.style.backgroundColor = "rgb(128, 0, 128)";
   } else {
       seasons2.style.display = "none";
       season2.style.backgroundColor = "";
   }
});

season3.addEventListener("click", function() {
    season1.style.backgroundColor = "black";
    season2.style.backgroundColor = "black";
    change.innerText = "SEASON 3";
    if (seasons3.style.display === "none") {
         seasons1.style.display = "none";
         seasons2.style.display = "none";
         seasons3.style.display = "block";
         season3.style.backgroundColor = "rgb(128, 0, 128)";
    } else {
         seasons3.style.display = "none";
         season3.style.backgroundColor = "";
    }
});