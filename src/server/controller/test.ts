import {EventController} from "./types";
import {findAll} from "@/server/model/db";

export class TestController extends EventController {


    private hello() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hello:' + Math.random());
            }, 5000);
        });
    }

    public test() {
        super.registerHandler('test', async (event, args) => {
            const list = await findAll();
            this.hello().then((res) => {
                console.log(res);
            });
            return 'test' + list.length;
        });
    }

    registerEvents(): void {
        this.test();
    }

}

