// Memory System

function saveChat() {

    localStorage.setItem(
        "chatHistory",
        JSON.stringify(chatHistory)
    );

}

function loadChat() {

    const savedChat = localStorage.getItem("chatHistory");

    if (savedChat) {

        chatHistory = JSON.parse(savedChat);

        renderChat();

    } else {

        clearChat();

    }

}

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
