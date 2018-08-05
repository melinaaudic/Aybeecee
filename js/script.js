// Padding supérieur au header fixe

var scroll = document.getElementById("scroll");
var menu = document.getElementById("menu");
var stylePara = getComputedStyle(document.getElementById("menu"));

function padding(x) {
  if (x.matches) { // If media query matches
    scroll.style.paddingTop = 0;
  } else {
    scroll.style.paddingTop = stylePara.height;
  }
}

var x = window.matchMedia("(max-width: 600px)")
padding(x) // Call listener function at run time
x.addListener(padding) // Attach listener function on state changes

// Diminution de l'image
var logo = document.getElementById("logo");

function menuScroll() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    logo.style.height = "80px";
    logo.style.width = "auto";

  } else {
    logo.style.height = "auto";
  }
}

window.addEventListener("scroll", menuScroll);



// Contact form
var form = document.querySelector("form");
var help = document.querySelector("#email_missing");
var regEx = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;

function input_valid(e) {
  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type == "text" || form.elements[i].type == "textarea" || form.elements[i].type == "email") {
      var idMissing = document.querySelector("#" + form.elements[i].id + "_missing");
      if (document.getElementById(form.elements[i].id).value === "") {
        e.preventDefault();
        idMissing.classList.remove("hide");
      } else {
        idMissing.classList.add("hide");
      }
    }
  }
}

function email_valid(e) {
  for (var j = 0; j < form.elements.length; j++) {
    if (regEx.test(email.value) == false) {
      help.textContent = "Le format de l'email n'est pas valide";
      help.classList.remove("hide");
    } else {
      help.classList.add("hide");
    }
  }
}

document.getElementById("email").addEventListener("input", email_valid);
document.getElementById("submit").addEventListener("click", input_valid);
