// ======================================
// NEXORA AI
// Founder: Yahaya Bello
// Version 3.0
// ======================================

// Founder Information
const founder = {
    name: "Yahaya Bello",
    company: "NEXORA AI",
    country: "Nigeria",
    motto: "Na samu mafita. Na samu malami."
};

// Knowledge Base
const knowledge = {
    "python": "Python yare ne mai sauƙin koya kuma yana da amfani wajen gina AI.",
    "ai": "Artificial Intelligence yana taimakawa wajen warware matsaloli.",
    "html": "HTML yana gina tsarin shafin yanar gizo.",
    "css": "CSS yana ƙawata shafin yanar gizo.",
    "javascript": "JavaScript yana sa shafin ya zama mai motsi.",
    "github": "GitHub yana adana project kuma yana taimakawa developers.",
    "english": "Learning English will help you understand science and AI.",
    "nexora": "NEXORA AI an gina ta domin taimaka wa mutane su koyi ilimi.",
    "assalamualaikum": "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh.",
    "assalamu alaikum": "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh.",
    "salam": "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh.",
    "founder": "Founder na NEXORA AI shine Yahaya Bello.",
    "country": "NEXORA AI ta fara daga Nigeria.",
    "mission": "Mission: To help people learn, solve problems and build skills.",
    "motto": "Na samu mafita. Na samu malami."
};

// Chat History
let chatHistory = [];

// Send Message
function sendMessage() {

    const input = document.getElementById("message");
    const message = input.value.trim();

    if (message === "") return;

    const key = message.toLowerCase();

    let reply = knowledge[key];

    if (!reply) {
        reply = "Ban san amsar wannan ba tukuna. Amma zan ci gaba da koyo.";
    }

    const time = new Date().toLocaleTimeString();

    chatHistory.push({
        user: message,
        ai: reply,
        time: time
    });

    localStorage.setItem(
        "chatHistory",
        JSON.stringify(chatHistory)
    );

    renderChat();

    input.value = "";
    input.focus();
}

// Render Chat
function renderChat() {

    let html = "";

    for (const chat of chatHistory) {

        html += `
        <div class="user-message">
            <strong>Kai:</strong><br>
            ${chat.user}
            <br><small>${chat.time}</small>
        </div>

        <div class="ai-message">
            <strong>NEXORA AI:</strong><br>
            ${chat.ai}
            <br><small>${chat.time}</small>
        </div>
        `;
    }

    document.getElementById("chat").innerHTML = html;
}
// Enter Key
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("message").addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            sendMessage();
        }

    });

});

// Clear Chat
function clearChat() {

    chatHistory = [];

    localStorage.removeItem("chatHistory");

    document.getElementById("chat").innerHTML = `
        <div class="ai-message">
            <strong>NEXORA AI</strong><br>
            Assalamu Alaikum.<br>
            Barka da zuwa Day One.
        </div>
    `;
}

// Home
function showHome() {

    document.getElementById("content").innerHTML = `
        <div class="home">
            <h2>🌍 Welcome to NEXORA AI</h2>

            <p><strong>Motto:</strong> ${founder.motto}</p>

            <p>
            NEXORA AI an gina ta domin taimaka wa mutane su koyi ilimi,
            su warware matsaloli, kuma su gina ƙwarewa.
            </p>

            <button onclick="showChat()">Start Learning</button>
        </div>
    `;
}

// Chat
function showChat() {

    document.getElementById("content").innerHTML = `
        <h2>💬 Chat</h2>
        <p>Rubuta saƙonka a akwatin da ke ƙasa.</p>
    `;
}

// Learn
function showLearn() {

    document.getElementById("content").innerHTML = `
        <h2>📚 Learn</h2>

        <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Artificial Intelligence</li>
        </ul>
    `;
}

// About
function showAbout() {

    document.getElementById("content").innerHTML = `
        <h2>ℹ️ About</h2>

        <p><strong>Founder:</strong> ${founder.name}</p>
        <p><strong>Company:</strong> ${founder.company}</p>
        <p><strong>Country:</strong> ${founder.country}</p>
        <p><strong>Motto:</strong> ${founder.motto}</p>
    `;
}

// Start App
window.onload = function () {

    showHome();

    const savedChat = localStorage.getItem("chatHistory");

    if (savedChat) {

        chatHistory = JSON.parse(savedChat);

        renderChat();

    } else {

        clearChat();

    }

};
