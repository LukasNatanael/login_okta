const { app, BrowserWindow, ipcMain} = require('electron')
const { event } = require('jquery')

let win
function mainWin() {
    win = new BrowserWindow({
        frame: false,
        minWidth: 1024,
        minHeight: 700,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:false,
            nodeIntegrationInSubFrames:true,


        },
    })
    win.loadURL(`file://${__dirname}/index.html`)
    win.webContents.openDevTools()

    win.on('ready-to-show', () => {
        win.show()
    })

    ipcMain.on('minimize', (e, data) => {
        win.minimize()
    })

    ipcMain.on('maximize', (e, data) => {
        if (win.isMaximized()) {
            win.unmaximize()
        }
        else {
            win.maximize()
        }
    })

    ipcMain.on('close', (e, data) => {
        win.close()
    })
}
//________________________ OKTA LOGIN _______________________//

const OktaAuth = require("@okta/okta-auth-js").OktaAuth;

// let mainWindow;
let user;

var config = {
    // Required config
    issuer: "https://dev-76431764.okta.com/oauth2/default",
    clientId: "oa984t21wWcFvziP5d7",
}
  
var authClient = new OktaAuth(config);
ipcMain.on("dados", (event, data) => {
    authClient
        .signInWithCredentials(data)
        .then(function (res) {
            // console.log(res);

            if (res.data.status != "SUCCESS") {
                event.reply("login-failed", err.errorSummary);
                return;
            }

            user = res.user;
            openHome();
        })
        .catch(function (err) {
            // console.log(err);
            event.reply("login-failed", 'Dados incorretos!');
        });
});

// ipcMain.handle('infos', (event) => {
//     return user;

// });

ipcMain.on('dados-usuario', (e, data) => {
    e.reply('recebeDados', user)
})

ipcMain.on("logout", (event, data) => {
    user = data;
    openIndex();
  });

function openIndex() {
    win.loadFile("index.html")
}

function openHome() {
    win.loadFile(`${__dirname}/home.html`)
}

// ABRINDO O APP
app.whenReady().then(() => {
    mainWin();
    openIndex();
  
    app.on("activate", function () {
      if (BrowserWindow.getAllWindows().length === 0) mainWin();
        });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});
