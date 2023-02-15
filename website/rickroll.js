const SUPABASE_URL = 'https://iiuopgiajxsgfklzrnvw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpdW9wZ2lhanhzZ2ZrbHpybnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwNDQzNzIsImV4cCI6MTk2MzYyMDM3Mn0.Oetpbrm6MoQXzr8ayeRGlRtbPXvBlL3BQ9vBq_26ukU'

let _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
async function loadSession() {
  try {
    const supautok = localStorage.getItem('supabase.auth.token');
    const supapar = JSON.parse(supautok);
    //const supapar2 = JSON.stringify(JSON.parse(JSON.stringify(supapar.currentSession)));
    //const supapar3 = JSON.parse(supapar2);

    const { data, error } = await _supabase.auth.getUser(supapar.access_token);
    if (!error) {
      console.log(`${data.user.user_metadata.first_name} ${data.user.user_metadata.last_name} - ${data.user.email} - ${data.user.user_metadata.username}`)
      console.log(data)
      return data
    }
  } catch (error) {
  
    window.location.replace("/website/401");

  }
}


//await sleep(5);
userData = loadSession()
