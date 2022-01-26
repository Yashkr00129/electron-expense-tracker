const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

process.env.NODE_ENV="production"

// Listen for app to be ready
app.on("ready", function () {
  // Create new window
  mainWindow = new BrowserWindow({ height: 800, width: 440 });
  // Load html file into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "html", "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  // Build menu from template

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [];
