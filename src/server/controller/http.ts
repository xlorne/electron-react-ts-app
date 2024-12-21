import {EventController} from "./types";
import {net} from "electron";

export class HttpController extends EventController {

    private readonly bastUrl: string = 'http://localhost:8090';

    public post() {
        super.registerHandler('post', async (event, args: { url: string, body: any }) => {
            const url = `${this.bastUrl}${args.url}`;
            const res = await net.fetch(url, {
                method: 'POST',
                body: JSON.stringify(args.body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return res.json();
        });
    }

    public get() {
        super.registerHandler('get', async (event, args: { url: string, params: any }) => {
            const url = `${this.bastUrl}${args.url}`;
            const res =  await net.fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return res.json();
        });
    }

    registerEvents(): void {
        this.post();
        this.get();
    }

}

