
const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

const terminal = document.querySelector("#terminal");

function showMessage(index) {
    if (index === messages.length) return;

    const line = document.createElement("div");
    line.className = "message";

    line.innerHTML = `${messages[index]} 
        <span class="dots"><span>.</span><span>.</span><span>.</span></span>`;

    terminal.appendChild(line);

    const delay = Math.floor(Math.random() * 7 + 1) * 1000;

    setTimeout(() => {
        line.querySelector(".dots").classList.add("done");
        showMessage(index + 1);
    }, delay);
}

showMessage(0);