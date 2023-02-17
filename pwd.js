function checkPassword() {
  var passwordInput = document.getElementById("password");
  var password = btoa(passwordInput.value); // encode the password in base64

  var correctPassword = btoa("test")
  if (password === correctPassword) {
    if (Number(atob(localStorage.getItem("BadloginAttempts"))) >= 10) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("game-list").style.display = "block";
    localStorage.setItem("allowed", btoa("ashnazgdurbatuluk"))
    }
  } else {
    document.getElementById("error-message").style.display = "block";
    passwordInput.value = ""
    if (Number(atob(localStorage.getItem("BadloginAttempts"))) >= 0) {
      localStorage.setItem("BadloginAttempts", btoa(Number(atob(localStorage.getItem("BadloginAttempts")))+1))
    } else {
    localStorage.setItem("BadloginAttempts", btoa(0))
    }
    if (Number(atob(localStorage.getItem("BadloginAttempts"))) >= 10) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }
}

checkPassword()
