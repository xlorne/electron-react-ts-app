import {EventController} from "./types";
import * as console from "node:console";
import {findAll, insert} from "@/server/model/db";

export class TestController extends EventController {

    public test() {
        super.registerHandler('test', async (event, args) => {
            console.log('test:', args);
            const list = await findAll();
            console.log(list);
            const data = {
                dirs: ['test'],
                ignorePaths: ['test'],
                types: ['test'],
                customType: 'test',
                customLength: 1
            }
            await insert(data);
            return 'test' + list.length;
        });
    }

    registerEvents(): void {
        this.test();
    }

}

