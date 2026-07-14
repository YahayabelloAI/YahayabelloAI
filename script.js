const founder = {
    name: "Yahaya Bello",
    company: "NEXORA AI",
    country: "Nigeria",
    motto: "Na samu mafita. Na samu malami."
};
const knowledge = {
    "python": "Python yare ne mai sauƙin koya kuma yana da amfani wajen gina AI.",
    "ai": "AI yana taimakawa mutane su warware matsaloli da kuma koyon sabbin abubuwa.",
    "github": "GitHub yana adana project kuma yana taimakawa developers su yi aiki tare.",
    "nexora": "NEXORA AI tana da manufar taimaka wa mutane su samu mafita da ilimi.",
    "hello": "Hello! Barka da zuwa NEXORA AI.",
    "assalamu alaikum": "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh."
};
"english": "Learning English will help you understand science and AI better."

for (let chat of chatHistory) {

html += `

<div class="user-message">

<strong>Kai</strong><br>

${chat.user}

<br><small>${chat.time}</small>

</div>

<div class="ai-message">

<strong>NEXORA AI</strong><br>

${chat.ai}

<br><small>${chat.time}</small>

</div>

`;

}

function sendMessage() {

    let input = document.getElementById("message");
    let message = input.value.trim();

    if (message === "") return;

    let key = message.toLowerCase();
    let reply = knowledge[key];

    if (!reply) {
        reply = "Ban san amsar wannan ba tukuna. Amma zan ci gaba da koyo.";
    }

    let time = new Date().toLocaleTimeString();

chatHistory.push({
    user: message,
    ai: reply,
    time: time
});
    });

    let html = "";

    for (let chat of chatHistory) {
        html += `
        
       html += `
<div class="user-message">
<strong>Kai:</strong><br>
${chat.user}
</div>

<div class="ai-message">
<strong>NEXORA AI:</strong><br>
${chat.ai}
</div>
`; 

 document.getElementById("chat").innerHTML = html;

    input.value = "";
    input.focus();
}
document.getElementById("message").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});

function clearChat(){

    chatHistory = [];

    document.getElementById("chat").innerHTML = `

    <div class="ai-message">

    <strong>NEXORA AI</strong><br>

    Assalamu Alaikum.

    Barka da zuwa NEXORA AI.

    Na samu mafita.

    Na samu malami.

    Rubuta saƙonka domin mu fara tattaunawa.

    </div>

    `;

}
}
window.onload = function () {

    document.getElementById("chat").innerHTML = `

    <div class="ai-message">

    <strong>NEXORA AI</strong><br>

    Assalamu Alaikum.

    Barka da zuwa NEXORA AI.

    Na samu mafita.

    Na samu malami.

    Rubuta saƙonka domin mu fara tattaunawa.

    </div>

    `;

}
