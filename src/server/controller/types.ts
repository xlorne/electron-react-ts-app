import {ipcMain} from "electron";
import IpcMainInvokeEvent = Electron.IpcMainInvokeEvent;

export abstract class EventController {

    public abstract registerEvents(): void;

    public registerHandler(key: string, handler: (event: IpcMainInvokeEvent, args: any) => any) {
        ipcMain.handle(key, handler);
    }

}
