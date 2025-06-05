// BrowserNew/main.js

import { app, BrowserWindow } from 'electron'
import process from 'process'

function createWindow() {
  const mainWindow = new BrowserWindow({
  width: 1000,
  height: 800,
  frame: false,
  transparent: true,       // this enables transparency
  backgroundColor: '#00000000', // fully transparent background
  hasShadow: false, // no shadow for a cleaner look 
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false, 
  },
})

  // ✅ Debug message before loading
  // console.log("🚀 Loading app from: http://localhost:5173/")

  // ✅ Load from Vite dev server
  mainWindow.loadURL('http://localhost:5173/')
  

  // ✅ Open dev tools for visibility
  // mainWindow.webContents.openDevTools()

  // ✅ Catch and log load errors
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error(`❌ Failed to load: ${errorDescription} (Code: ${errorCode})`)
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

