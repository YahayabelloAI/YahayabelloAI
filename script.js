<!DOCTYPE html>
<html lang="ha">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NEXORA AI V7.1</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;background:#0E1028;color:#fff;min-height:100vh}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;background:rgba(0,0,0,0.2)}
.xbtn,.iconbtn{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,0.08);border:none;color:#fff;font-size:18px;display:grid;place-items:center;cursor:pointer}
.header{display:flex;gap:12px;align-items:center;padding:6px 18px 14px}
.logo-box{width:50px;height:50px;border-radius:16px;background:linear-gradient(135deg,#8B5CF6,#6D28D9);display:grid;place-items:center;font-size:22px;box-shadow:0 8px 24px rgba(139,92,246,0.4)}
.logo-title{font-family:'Space Grotesk';font-weight:700;font-size:26px;color:#A78BFA}
.logo-sub{font-size:12px;letter-spacing:3px;color:#7A7DA0;font-weight:600}
.logo-sub.live{color:#34D399}
.tabs{display:flex;gap:8px;padding:8px 18px}
.tab{padding:10px 20px;border-radius:999px;border:none;background:rgba(255,255,255,0.06);color:#9AA0C3;font-weight:600;cursor:pointer}
.tab.active{background:#8B5CF6;color:#fff;box-shadow:0 6px 20px rgba(139,92,246,0.4)}
main{max-width:900px;margin:0 auto;padding:10px 14px 100px}
.card{background:#151836;border:1px solid rgba(255,255,255,0.07);border-radius:28px;overflow:hidden}
.chat-head{display:flex;justify-content:space-between;align-items:center;padding:16px 18px;border-bottom:1px solid rgba(255,255,255,0.06)}
.chat-left{display:flex;gap:10px;align-items:center}
.avatar{width:44px;height:44px;border-radius:50%;background:#8B5CF6;display:grid;place-items:center;font-weight:700;position:relative}
.avatar:after{content:'';position:absolute;right:-2px;bottom:-2px;width:12px;height:12px;background:#22C55E;border:3px solid #151836;border-radius:50%}
.chat-title{font-weight:700}
.chat-sub{font-size:11px;color:#8A8EAF}
#clearBtn{padding:8px 14px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);color:#A9ADC9;font-size:12px;cursor:pointer}
#msgs{padding:18px;display:flex;flex-direction:column;gap:16px;min-height:380px;max-height:60vh;overflow-y:auto}
.msg-row{display:flex;gap:10px}
.msg-avatar{width:34px;height:34px;border-radius:50%;background:#8B5CF6;display:grid;place-items:center;font-weight:700;font-size:12px;flex-shrink:0}
.msg-bubble{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.06);padding:12px 14px;border-radius:18px;max-width:84%;line-height:1.6;font-size:14px}
.msg-bubble.user{background:#8B5CF6;margin-left:auto}
.input-wrap{padding:12px 14px;display:flex;gap:10px;border-top:1px solid rgba(255,255,255,0.06)}
#userInput{flex:1;padding:13px 18px;border-radius:999px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.06);color:#fff;outline:none}
#sendBtn{width:46px;height:46px;border-radius:50%;background:#6B4EFF;border:none;display:grid;place-items:center;color:#fff;cursor:pointer;font-size:18px}
#sendBtn:disabled{opacity:0.4}
#clearFeedback{font-size:11px;color:#34D399;padding:6px 18px;display:none}
</style>
</head>
<body>
<div class="topbar">
<button class="xbtn" onclick="location.reload()">✕</button>
<div style="display:flex;gap:8px"><button class="iconbtn">•••</button><button class="iconbtn">&lt;/&gt;</button></div>
</div>
<div class="header">
<div class="logo-box">⚡</div>
<div><div class="logo-title">NEXORA AI</div><div class="logo-sub">V5 • NIGERIA <span class="live">• LIVE</span></div></div>
</div>
<div class="tabs">
<button class="tab" data-tab="home" onclick="switchTab('home')">Home</button>
<button class="tab active" data-tab="chat" onclick="switchTab('chat')">Chat</button>
<button class="tab" data-tab="learn" onclick="switchTab('learn')">Learn</button>
<button class="tab" data-tab="about" onclick="switchTab('about')">About</button>
</div>

<main>
<div id="tab-home" class="tab-panel" style="display:none;padding:20px;color:#9AA0C3"><h1 style="font-family:Space Grotesk;color:#fff;font-size:38px;line-height:1.1">Gina makomar<br><span style="color:#A78BFA">AI a Najeriya.</span></h1><p style="margin-top:12px">NEXORA V7.1 - V5 Design + Gemini Brain</p></div>

<div id="tab-chat" class="tab-panel">
<div class="card">
<div class="chat-head">
<div class="chat-left"><div class="avatar">N</div><div><div class="chat-title">NEXORA AI V5 <span style="font-size:10px;padding:3px 6px;border:1px solid #8B5CF6;border-radius:6px;color:#A78BFA">BETA</span></div><div class="chat-sub">Amsa cikin &lt; 1s • Gemini Brain</div></div></div>
<button id="clearBtn">🗑️ Clear Chat</button>
</div>
<div id="clearFeedback"></div>
<div id="msgs">
<div class="msg-row"><div class="msg-avatar">N</div><div class="msg-bubble">Assalamu Alaikum. Barka da zuwa Day One.<br><br>Ni ce NEXORA AI V7.1 — fasahar AI daga Najeriya, don duniya baki daya. Yaya zan taimaka maka yau?</div></div>
</div>
<div class="input-wrap">
<input id="userInput" placeholder="Rubuta sakonka...">
<button id="sendBtn">➤</button>
</div>
</div>
</div>

<div id="tab-learn" class="tab-panel" style="display:none;padding:20px;color:#9AA0C3"><h2>Learn</h2><p>Koyi amfani da NEXORA.</p></div>
<div id="tab-about" class="tab-panel" style="display:none;padding:20px;color:#9AA0C3"><h2>About</h2><p>NEXORA AI V7.1 by Yahaya Bello. Made in Nigeria.</p></div>
</main>

<script>
const API_KEY="AQ.Ab8RN6JeHmPgryme5B9vEBZyI50vOXQQRnw4MYUORs7LFH9REg";
// ============================================================

const messagesEl = document.getElementById('msgs');
const inputEl = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const feedback = document.getElementById('clearFeedback');

function addMessage(text, role){
  const row = document.createElement('div');
  row.className = 'msg-row';
  if(role === 'user'){
    row.style.justifyContent = 'flex-end';
    row.innerHTML = `<div class="msg-bubble user">${text}</div>`;
  } else {
    row.innerHTML = `<div class="msg-avatar">N</div><div class="msg-bubble">${text.replace(/\n/g,'<br>')}</div>`;
  }
  messagesEl.appendChild(row);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return row;
}

async function askGemini(prompt){
  const models = ["gemini-2.0-flash","gemini-1.5-flash"];
  let lastErr="";
  for(const model of models){
    try{
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
      const body = { contents: [{ parts: [{ text: `Kai ne NEXORA AI V7.1, AI da Yahaya Bello ya gina a Najeriya. Kana magana da Hausa da Turanci sosai. Idan an yi Hausa ka amsa da Hausa. Kada ka ce kai Gemini ne, ka ce kai NEXORA.\n\nUser: ${prompt}` }] }] };
      const res = await fetch(url, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(body) });
      const data = await res.json();
      if(data.error){ lastErr = data.error.message; continue; }
      const txt = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if(txt) return txt;
    }catch(e){ lastErr = e.message; }
  }
  throw new Error(lastErr || "Babu connection");
}

async function handleSend(){
  const txt = inputEl.value.trim();
  if(!txt) return;
  if(API_KEY === "SAKA_KEY_DINKA_ANAN" || API_KEY.length < 10){
    alert("Don Allah saka API Key dinka a cikin code! Nemo SAKA_KEY_DINKA_ANAN ka canza.");
    return;
  }
  addMessage(txt,'user');
  inputEl.value='';
  sendBtn.disabled = true;
  const loading = addMessage("NEXORA na rubutawa...","assistant");
  try{
    const ans = await askGemini(txt);
    loading.remove();
    addMessage(ans,'assistant');
  }catch(e){
    loading.remove();
    addMessage("Kuskure: " + e.message + "\n\nBincika: 1) Key daga aistudio.google.com ne? 2) Internet? 3) Ka yi Allow Secret a GitHub?","assistant");
  }
  sendBtn.disabled = false;
}

sendBtn.addEventListener('click', handleSend);
inputEl.addEventListener('keypress', e=>{ if(e.key==='Enter') handleSend(); });

clearBtn.addEventListener('click', ()=>{
  messagesEl.innerHTML='';
  feedback.style.display='block';
  feedback.textContent = '✓ An goge - ' + new Date().toLocaleTimeString();
  setTimeout(()=>{
    addMessage('Assalamu Alaikum. Barka da zuwa Day One.\n\nNi ce NEXORA AI V7.1 — fasahar AI daga Najeriya, don duniya baki daya. Yaya zan taimaka maka yau?','assistant');
    feedback.style.display='none';
  }, 500);
});

function switchTab(tab){
  document.querySelectorAll('.tab').forEach(b=> b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('.tab-panel').forEach(t=> t.style.display='none');
  document.getElementById('tab-'+tab).style.display='block';
}
window.switchTab = switchTab;
</script>
</body>
</html>
