
const messagesEl = document.getElementById('chatMessages');
const inputEl = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const feedback = document.getElementById('clearFeedback');

function getResponse(text){
  const low = text.toLowerCase();
  if(/(sannu|lafiya|yaya|ina|barka|nagode|hausa)/.test(low)) return "Lafiya lau! Na ji Hausa sosai — harshe mai dadi. Zan iya taimaka maka rubuta labari, fassara, yin wasiku, ko bada shawara kan kasuwanci a Hausa tsantsa. Me kake son mu tattauna?";
  if(/(code|python|javascript|api|bug|function)/.test(low)) return "Ina son coding! NEXORA V5 an horar da ita akan Python, JavaScript, Rust, da Go. Zan iya rubuta maka code mai tsabta, debug, da kuma bayani step-by-step. Aiko min snippet din ka.";
  if(/(nigeria|najeriya|kano|lagos|africa)/.test(low)) return "Najeriya ce zuciyar NEXORA. An gina mu a Kano da Lagos, tare da hangen nesa: Africa ta jagoranci AI, ba sai ta bi baya ba.";
  return "Madalla! Na gane sakonka. NEXORA AI V5 tana aiki da ilimin Hausa, Turanci, da harsuna 50+. A matsayin samfurin demo na gani (frontend only), wannan amsa an kirkire ta ne a cikin browser dinka — babu server. Amma a zahiri, V5 zata iya rubutu, bincike, coding, da fassara cikin sauri.";
}

function addMessage(text, role){
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  const time = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  div.innerHTML = `<div class="msg-role">${role==='user'?'KAI':'NEXORA AI'}</div><div class="msg-text">${text.replace(/\n/g,'<br>')}</div><div class="msg-time">${time}</div>`;
  messagesEl.appendChild(div);
  messagesEl.scrollTo({top: messagesEl.scrollHeight, behavior:'smooth'});
}

function handleSend(){
  const txt = inputEl.value.trim();
  if(!txt) return;
  addMessage(txt,'user');
  inputEl.value='';
  setTimeout(()=>{ addMessage(getResponse(txt),'assistant'); }, 800);
}

sendBtn.addEventListener('click', handleSend);
inputEl.addEventListener('keypress', e=>{ if(e.key==='Enter') handleSend(); });

clearBtn.addEventListener('click', ()=>{
  messagesEl.innerHTML='';
  feedback.style.display='block';
  feedback.textContent = '✓ An goge tattaunawa - ' + new Date().toLocaleTimeString();
  setTimeout(()=>{
    addMessage('Assalamu Alaikum. Barka da zuwa Day One.\n\nNi ce NEXORA AI V5 — fasahar AI daga Najeriya, don duniya baki daya. Yaya zan taimaka maka yau?','assistant');
    feedback.style.display='none';
  }, 600);
});

function switchTab(tab){
  document.querySelectorAll('.nav-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.tab===tab);
  });
  document.querySelectorAll('.tab').forEach(t=> t.classList.remove('active'));
  document.getElementById('tab-'+tab).classList.add('active');
}
document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> switchTab(btn.dataset.tab));
});
window.switchTab = switchTab;
