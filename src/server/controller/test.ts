import {EventController} from "./index";
import {ipcMain} from "electron";

export class TestController implements EventController{

    public test(){
        ipcMain.handle('test', (event, args) => {
            console.log('test 123:', args);
            return 'test';
        });
    }

    registerEvents(): void {
        this.test();
    }
}

