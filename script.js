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



function checkPWD(e) {
  if (e.keyCode === 13) {
    checkPassword()
  }
}

const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', checkPWD);

if (localStorage.getItem('allowed') === btoa("ashnazgdurbatuluk")) {
  document.getElementById("login-box").style.display = "none";
  document.getElementById("game-list").style.display = "block";
}

function Logout() {
  localStorage.setItem("allowed", btoa("no"))
  window.location.reload();
}

/**
function darkmode() {
  document.getElementById("darkmode").onclick = function() {

    if (localStorage.getItem("darkmode") === "darkmode") {
      localStorage.setItem("darkmode", "lightmode");
    } else {
      localStorage.setItem("darkmode", "darkmode");
    }
  }

  setInterval(function() {
    var element = document.body;
    if (localStorage.getItem("darkmode") === "darkmode") {
      try {
        element.classList.add("dark-mode");
      } catch (error) {

      }
    } else if (localStorage.getItem("darkmode") !== "darkmode") {
      try {
        element.classList.remove("dark-mode");
      } catch (error) {

      }
    };
  }, 400)
}

darkmode()

async function getname() {
  const supautok = localStorage.getItem('supabase.auth.token');
  const supapar = JSON.parse(supautok);
  const supapar2 = JSON.stringify(JSON.parse(JSON.stringify(supapar.currentSession)));
  const supapar3 = JSON.parse(supapar2);

  const { data, error } = await _supabase.auth.api.getUser(supapar3.access_token);
  if (!error) {
    var yooo = `${data.user_metadata.first_name} ${data.user_metadata.last_name}`;
    return yooo;
  }
}


checkkliv = getname()
checkkliv.then((name) => {
  if (name === "") { window.location.replace("/401/"); }
})

 */