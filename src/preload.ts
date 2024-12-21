// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// Add this to the end of the existing file
import './main';
import {contextBridge, ipcRenderer} from "electron";

contextBridge.exposeInMainWorld('ipcRenderer', {

    removeListener: (channel:string) => {
        ipcRenderer.removeAllListeners(channel);
    },

    invoke: (channel:string, data:any) => {
        return ipcRenderer.invoke(channel, data);
    },
})

// @ts-ignore
window.ipcRenderer = ipcRenderer;
