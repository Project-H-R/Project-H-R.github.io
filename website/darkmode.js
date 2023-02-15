const SUPABASE_URL = 'https://iiuopgiajxsgfklzrnvw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpdW9wZ2lhanhzZ2ZrbHpybnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwNDQzNzIsImV4cCI6MTk2MzYyMDM3Mn0.Oetpbrm6MoQXzr8ayeRGlRtbPXvBlL3BQ9vBq_26ukU'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  

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
  try{
  const { data, error } = await _supabase.auth.getUser(supapar.access_token);
  if (!error) {
    var yooo = `${data.user.user_metadata.first_name} ${data.user.user_metadata.last_name}`;
    return yooo;
  } } catch (error) { 
  window.location.replace("/website/401/");
  }
}


checkkliv = getname()
checkkliv.then((name) => {
  if (name === "") {
    console.log("\/\/\/\/\/\/\/\/\/")
    console.log(name);
    window.location.replace("/website/401/");
  }
})
