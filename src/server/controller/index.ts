import {TestController} from "./test";
import {EventController} from "./types";
import {HttpController} from "./http";


export class ControllerRegister {

    private static instance: ControllerRegister;

    private controllers: EventController[] = [];

    private constructor() {
        this.initControllers();
    }

    static getInstance() {
        if (!ControllerRegister.instance) {
            ControllerRegister.instance = new ControllerRegister();
        }
        return ControllerRegister.instance;
    }

    private initControllers() {
        this.controllers.push(new HttpController());
        this.controllers.push(new TestController());
    }


    public registerControllers() {
        this.controllers.forEach(controller => {
            controller.registerEvents();
        });
    }
}
