function checkPass() {
  let pass = document.getElementById("pass").value;

  if (pass === "1234") {
    window.location.href = "love.html";
  } else {
    alert("الباسورد غلط يا نجم 😏");
  }
}
