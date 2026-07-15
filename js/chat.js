// Chat System

let chatHistory = [];

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

    saveChat();

    renderChat();

    input.value = "";

    input.focus();

}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("message").addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    });

});
