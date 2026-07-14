const knowledge = {
    "python": "Python yare ne mai sauƙin koya kuma yana da amfani wajen gina AI.",
    "ai": "AI yana taimakawa mutane su warware matsaloli da kuma koyon sabbin abubuwa.",
    "github": "GitHub yana adana project kuma yana taimakawa developers su yi aiki tare.",
    "nexora": "NEXORA AI tana da manufar taimaka wa mutane su samu mafita da ilimi.",
    "hello": "Hello! Barka da zuwa NEXORA AI.",
    "assalamu alaikum": "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh."
};

let chatHistory = [];

function sendMessage() {

    let input = document.getElementById("message");
    let message = input.value.trim();

    if (message === "") return;

    let key = message.toLowerCase();
    let reply = knowledge[key];

    if (!reply) {
        reply = "Ban san amsar wannan ba tukuna. Amma zan ci gaba da koyo.";
    }

    chatHistory.push({
        user: message,
        ai: reply
    });

    let html = "";

    for (let chat of chatHistory) {
        html += `
        <hr>
        <p><strong>Kai:</strong> ${chat.user}</p>
        <p><strong>NEXORA AI:</strong> ${chat.ai}</p>
        `;
    }

    document.getElementById("chat").innerHTML = html;

    input.value = "";
    input.focus();
}
document.getElementById("message").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
