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
  const supautok = localStorage.getItem('sb-iiuopgiajxsgfklzrnvw-auth-token');
  const supapar = JSON.parse(supautok);
  //const supapar2 = JSON.stringify(JSON.parse(JSON.stringify(supapar)));
  //const supapar3 = JSON.parse(supapar2);

  const { data, error } = await _supabase.auth.getUser(supapar.access_token);
  if (!error) {
    var yooo = `${data.user_metadata.first_name} ${data.user_metadata.last_name}`;
    return yooo;
  }
}


checkkliv = getname()
checkkliv.then((name) => {
  if (name === "") { window.location.replace("/401/"); }
})
