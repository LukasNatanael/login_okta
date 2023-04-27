const { app, BrowserWindow, ipcMain} = require('electron')

let win
function mainWin() {
    win = new BrowserWindow({
        frame: false,
        movable:true,
        hasShadow: true,
        fullscreenable:true,
        center: true,
        autoHideMenuBar:true,
    
        minWidth: 1024,
        minHeight: 700,
        webPreferences: {
        //   preload: path.join(__dirname, "preload.js"),
          nodeIntegration: true,
          contextIsolation:false
        },
    })
    win.loadURL(`file://${__dirname}/index.html`)

    ipcMain.on('minimize', (e, data) => {
        console.log(data)
        win.minimize()
    })

    ipcMain.on('maximize', (e, data) => {
        console.log(data)
        if (win.isMaximized()) {
            win.unmaximize()
        }
        else {
            win.maximize()
        }
    })

    ipcMain.on('close', (e, data) => {
        console.log(data)
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
        console.log(err);
        event.reply("login-failed", err.errorSummary);
        });
    });

    ipcMain.handle("user:get", (event) => {
    return user;
});

ipcMain.on("logout", (event) => {
    user = null;
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
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
        });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});
