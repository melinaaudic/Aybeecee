var form = document.querySelector("form");
var regEx = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;


//function inputText(e, input, span, message) {
//  if (input.validity.valueMissing) {
//    e.preventDefault();
//    span.textContent = message;
//  } else {
//    span.textContent = "";
//  }
//}
//
//function inputEmail(e, input, span, message) {
//  if (input.validity.valueMissing) {
//    e.preventDefault();
//    span.textContent = message;
//  } else if (regEx.test(input.value) == false) {
//    e.preventDefault();
//    span.textContent = "Le format de l'e-mail est incorrect";
//  } else {
//    span.textContent = "";
//  }
//}


//function validator() {
//  if (form.elements.prenom.type == "text") {
//    function inputText(e) {
//      if (prenom.validity.valueMissing) {
//        e.preventDefault();
//        prenom_m.textContent = "Veuillez ajouter votre prénom";
//      } else {
//        prenom_m.textContent = "";
//      }
//    }
//    console.log("patata");
//  }
//}
//    if (form.elements[i].type == "text" || form.elements[i].type == "textarea") {
//
//    } else if (form.elements[i].type == "email") {
//      if (email.validity.valueMissing) {
//        console.log("email faux");
//        e.preventDefault();
//      } else if (regEx.test(email.value) == false) {
//        console.log("regex faux");
//        e.preventDefault();
//      } else {
//        console.log("email ok");
//      }
//    }

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
