// Scroll du header
var header = document.getElementById("header");
var headerScroll = document.getElementById("header-scroll");
var divAfter = document.getElementById("scroll");

function menuScroll() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    header.classList.add("hide");
    headerScroll.classList.remove("hide");
    divAfter.style.paddingTop = "100px";

  } else {
    header.classList.remove("hide");
    headerScroll.classList.add("hide");
    divAfter.style.paddingTop = "430px";
  }
}

window.addEventListener("scroll", menuScroll);

// Contact form
var form = document.querySelector("form");
var regEx = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;

function f_valid(e) {
  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type == "text" || form.elements[i].type == "textarea" || form.elements[i].type == "email") {
      var idMissing = document.querySelector("#" + form.elements[i].id + "_missing");

      if (document.getElementById(form.elements[i].id).value === "") {
        e.preventDefault();
        idMissing.classList.remove("hide");
      } else if (form.elements[i].type == "email" && regEx.test(email.value) == false) {
        e.preventDefault();
        idMissing.classList.remove("hide");
        idMissing.textContent = "Le format de l'email n'est pas valide";
      } else {
        idMissing.classList.add("hide");
      }
    }
  }
}

document.getElementById("submit").addEventListener("click", f_valid);
