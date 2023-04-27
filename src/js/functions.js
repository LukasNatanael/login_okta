document.querySelector("#login-button").addEventListener("click", () => {
    const username = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    const data = {
    username: username,
    password: password,
    };

    window.electron.login(data);
});

// ____________________________________________

const { ipcRenderer } = require('electron')

function minimize() {
    // ipcRenderer.send('name', 'saurav')
    ipcRenderer.send('minimize', 'saurav')
}

function maximize() {
    // ipcRenderer.send('name', 'saurav')
    ipcRenderer.send('maximize', 'saurav')
}

function close() {
    // ipcRenderer.send('name', 'saurav')
    ipcRenderer.send('close', 'saurav')
}