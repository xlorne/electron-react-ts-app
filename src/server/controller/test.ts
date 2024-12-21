import {EventController} from "./types";
import * as console from "node:console";

export class TestController extends EventController{

    public test(){
        super.registerHandler('test', (event, args) => {
            console.log('test 123:', args);
            return 'test';
        });
    }

    registerEvents(): void {
       this.test();
    }

}

