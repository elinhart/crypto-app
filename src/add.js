const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote

const closeBtn = document.getElementById("closeBtn")

closeBtn,addEventListener("click", function (event) {
    var window = remote.getCurrentWindow();
    window.close()
})