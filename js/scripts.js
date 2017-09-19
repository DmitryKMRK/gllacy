var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".contacts-form");
var overlay = document.querySelector(".contacts-form-overlay");
var close = popup.querySelector(".contacts-close-button");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=contacts-email]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("contacts-form-show");
  overlay.classList.add("contacts-form-overlay-show");

  if(storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("contacts-form-show")) {
      popup.classList.remove("contacts-form-show");
      overlay.classList.remove("contacts-form-overlay-show");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
  evt.preventDefault();
  alert("Заполни обязательные поля!!!");
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("contacts-form-show");
  overlay.classList.remove("contacts-form-overlay-show");
});
