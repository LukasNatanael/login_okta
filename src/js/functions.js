const { ipcRenderer } = require('electron')
function minimizar() {
    ipcRenderer.send('minimize', 'minimizando')
}
function maximizar() {
    ipcRenderer.send('maximize', 'maximizando')
}
function fechar() {
    ipcRenderer.send('close', 'fechando')
}

//_______________________________________________________________
function flashMessage(message) {
    document.getElementById("error-message").textContent = message;
    document.getElementById("error-message").style.display = 'inline';
    setTimeout(function() {
        document.getElementById("error-message").textContent = '';
        document.getElementById("error-message").style.display = 'none';

    }, 2000)
}
//_______________________________________________________________
ipcRenderer.on("login-failed", (event, message) => {
    flashMessage(message)
})

//_______________________________________________________________
