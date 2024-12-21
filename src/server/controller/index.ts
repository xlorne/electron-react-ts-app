import {TestController} from "./test";

export interface EventController {

    registerEvents(): void;
}

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
        this.controllers.push(new TestController());
    }


    public registerControllers() {
        this.controllers.forEach(controller => {
            controller.registerEvents();
        });
    }
}
