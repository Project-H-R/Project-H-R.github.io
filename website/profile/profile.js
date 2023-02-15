
userData.then((value) => {
  x = `Hello ${value.user_metadata.first_name} ${value.user_metadata.last_name}`;
  document.getElementById("welcome").insertAdjacentHTML('beforeend', x);
})

document.getElementById("pfcolorbutton").onclick = function() {
  userData.then((value) => { pfpChange(value); })
}


async function pfpChange(value) {
  console.log(document.getElementById("pfcolor").value)
  const { data, error } = await _supabase.from('pfcolor').insert([{ person: `${value.user_metadata.first_name} ${value.user_metadata.last_name}`, color: `${document.getElementById("pfcolor").value}` }])

  const { data2, error2 } = await _supabase.from('pfcolor').update({ color: `${document.getElementById("pfcolor").value}` }).match({ person: `${value.user_metadata.first_name} ${value.user_metadata.last_name}` });
  console.log(data);

}


document.getElementById("passwordbutton").onclick = function (){changePass()}

async function changePass() {
      newpass = document.getElementById("password").value;
  const { user, error } = await _supabase.auth.update({password: newpass})
  document.getElementById("password").value = '';
  window.alert("Changed your password to " + newpass)
}




