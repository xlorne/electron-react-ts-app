import {EventController} from "./types";
import {MediaUtils} from "@/server/utils/media";

export class TestController extends EventController {

    public test() {
        super.registerHandler('test', async (event, args) => {
            MediaUtils.loadMediaInfo('/Users/lorne/Downloads/123.mkv').then((result) => {
                console.log(result);
            });
        });
    }

    registerEvents(): void {
        this.test();
    }

}

