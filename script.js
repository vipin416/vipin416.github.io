function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if ((username === "aarav" || username === "bhavya") && password === "WishBB") {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("contentContainer").style.display = "block";
  } else {
    alert("Invalid username or password");
  }
}
