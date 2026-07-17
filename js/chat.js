// =====================================
// NEXORA AI Chat System
// Version 4.1
// =====================================

let chatHistory = [];

// Search lesson in database
function getReply(text) {

    text = text.toLowerCase();

    for (const lesson of lessons) {

        if (text.includes(lesson.keyword)) {

            return lesson.reply;

        }

    }

    return "Ban san amsar wannan ba tukuna. Amma zan ci gaba da koyo.";

}

// Send Message
function sendMessage() {

    const input = document.getElementById("message");

    const message = input.value.trim();

    if (message === "") return;

    const reply = getReply(message);

    const time = new Date().toLocaleTimeString();

    chatHistory.push({

        user: message,

        ai: reply,

        time: time

    });
    saveMemory();
    let let = "";

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
<br><ssaveMemory${chat.time}</small>
</div>
`;

    }

    document.getElementById("chat").innerHTML = html;

    input.value = "";

    input.focus();

}

// Enter key
document.getElementById("message").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});

// Clear Chat
function clearChat() {

    chatHistory = [];
clearMemory();
    document.getElementById("chat").innerHTML = `
<div class="ai-message">
<strong>NEXORA AI</strong><br>
Assalamu Alaikum.<br>
Barka da zuwa NEXORA AI Brain Version 4.1.
</div>
`;

}
window.onload = function () {

    loadMemory();

    if (chatHistory.length === 0) {

        clearChat();

    }

};
