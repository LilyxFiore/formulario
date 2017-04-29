var element = document.querySelector(".content-form");
element.addEventListener("submit", function(event) {

  var password = document.getElementById("input-password");
  var repassword = document.getElementById("input-repassword");

  if(password.value>repassword.value){
    event.preventDefault();
    showToolTip("Contraseña de confirmación no coincide. Tiene menos carácteres que la contraseña",repassword);
    return false;
  }
  else if(password.value<repassword.value)
  {
    event.preventDefault();
    showToolTip("Contraseña de confirmación no coincide. Tiene más carácteres que la contraseña",repassword);
    return false;
  }
 else if (password.value===repassword.value) {
    hiddenToolTip(repassword);
    alert("Sus datos han sido registrados correctamente");
    return true;
  }
});

/**Ocultar toolTip **/
function hiddenToolTip(nodoInput){
  var nodoSpan= nodoInput.nextElementSibling;
  nodoSpan.setAttribute("style","display:none");
}

/**Mostrar toolTip **/
function showToolTip(texto,nodoInput){
    var nodoSpan= nodoInput.nextElementSibling;
    nodoSpan.setAttribute("style","display:block");
    nodoSpan.innerHTML = texto;
}
