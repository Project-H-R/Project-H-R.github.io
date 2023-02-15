var currentChat = "chatmatalex"

async function sendMessage(persons) {
  async function insertData(person) {
    if (valueBox.value !== dissalowedstring) {
      let unique = new Set(valueBox.value);
      if (unique.size !== dissallowedunique) {
        if (valueBox.value.length <= maxlength) {
          if (validator.isAscii(valueBox.value)) {
            const { data, error } = await _supabase.from(currentChat).insert([
              { person: person, text: valueBox.value }
            ])
          }
        }
      }
    }
  }
  insertData(persons)
  document.getElementById("message").value = '';
}

valueBox = document.getElementById("message");

document.getElementById("submit").onclick = function() {
  const yooo = getname()
  yooo.then((value) => { sendMessage(value); })
};


x = setInterval(async function loadData() {
  const { data, error } = await _supabase.from(currentChat).select('*')
  const { data: data2, error: error2 } = await _supabase.from("pfcolor").select('*')
  let contents = '<tr><th>Name</th><th>Message</th><th>Date</th><th>Time</th></tr>'
  if (!error) {
    const parent = document.getElementById('messages')
    let time;

    data.reverse();


    data.forEach(async function(item) {
      let done = 0
      time = item.created_at.split('.')
      time = time[0].split('T')

      

      data2.forEach(function(item2) {
        if (item2.person === item.person) {
           //if (item.person === "Alexander Wojtulewski") {item.person = "Alex Waterjetski"} 
          if (currentChat === "ffffff"){
            item2.color = "#ffffff"
          };
          contents += `<tr><th style="color:${item2.color};">${item.person}</th><td>${item.text}</td><th>${time[0]}</th><th>${time[1]}</th></tr>`
          done += 1

        }
      }
      )
      if (done === 0) {
        contents += `<tr><th>${item.person}</th><td>${item.text}</td><th>${time[0]}</th><th>${time[1]}</th></tr>`
      }
      done === 0



    })
    parent.innerHTML = contents;
    contents = ''
  }
}, 500);


document.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const yooo = getname()
    yooo.then((value) => { sendMessage(value); })
  }else if (e.ctrlKey) {
    console.log(e)
  }
  console.log(e)

  
};
let yoooo = getname()
yoooo.then((name) => {
setInterval(function(){
  
        if (name === "Mateusz Jelinski" || name === "Tejas Sriram") {
          if (xyz === 1) {
            maxlength = 10000;
          } else if (xyz === 0) {
            maxlength = 150;
          }
          
        } else {
          maxlength = 150;
        }
      }, 1)
})

function isKeyPressed(event) {
  var x = document.getElementById("demo");
  if (event.altKey) {
    if (maxlength === 150) {
      const yooo = getname()
      yooo.then((name) => {
        if (name === "Mateusz Jelinski"||name==="admin admin"|| name === "Tejas Sriram") {
        maxlength = 10000;
        xyz = 1
      }
        })
      
    }else if (maxlength === 10000) {
      xyz=0;
      maxlength = 150;
      
    }
  } 
}

//window.location.replace("/401");

let xyz = 0;
let maxlength = 150;
const dissalowedstring = '';
const dissallowedunique = 1;
//setInterval




const whitesss = '<input type="radio" name="chattype" value="General" id="general"><label for="general">General Chat</label><input type="radio" name="chattype" value="Memes" id="memes"><label for="memes">School Chat</label><input type="radio" name="chattype" value="Ideas" id="ideas"><label for="ideas">Ideas</label><input type="radio" name="chattype" value="Whiteianity" id="whiteianity"><label for="whiteianity">Whiteianity</label>'


async function getwhite(name){
  const { data: data2, error: error2 } = await _supabase.from("pfcolor").select('*')
  data2.forEach(function(item2) {
    if (item2.person === name) {
          if (item2.color === "#ffffff" || item2.person === "admin admin" || item2.person === "Mateusz Jelinski") {
            document.getElementById("white").innerHTML = whitesss;
          }
    }
      })
}





var chatType
setInterval(async function() {
  const radioButtons = document.querySelectorAll('input[name="chattype"]');

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      chatType = radioButton.value;
      break;
    }
  }
  if (chatType) {
    if (chatType === 'General') {
      currentChat = "chatmatalex";
    } else if (chatType === "Memes") {
      currentChat = "memes";
    } else if (chatType === "Ideas") {
      currentChat = "ideas"
    } else if (chatType === "Whiteianity"){
      /*const { data: data2, error: error2 } = await _supabase.from("pfcolor").select('*')
      const yooo = getname()
      yooo.then((name) => {
        data2.forEach(async function(){
        if (data2.person === name||name==="Mateusz Jelinski"||name==="admin admin"){*/
          currentChat = "ffffff"
        //}
      //})})
      
    }
  } else {
    chatType = 'General'
  }
  console.log(chatType)

}, 5)

const yooo = getname()
yooo.then((value) => { getwhite(value); })

setInterval(function(){
  const yooo = getname()
  yooo.then((value) => { getwhite(value); })
},60000)

setInterval(function(){
  document.getElementById("lengthMessage").innerHTML = `${maxlength - valueBox.value.length} characters left`
},1)
