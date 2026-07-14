
function sendMessage(){

let message=document.getElementById("message").value;

if(message===""){
    return;
}

document.getElementById("chat").innerHTML += `
<p><b>Kai:</b> ${message}</p>

<p><b>NEXORA AI:</b>
Na karɓi saƙonka.
Na samu mafita.
Na samu malami.
</p>
`;

document.getElementById("message").value="";
}
