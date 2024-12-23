import {EventController} from "./types";
import {net} from "electron";

export class HttpController extends EventController {

    private readonly baseUrl: string = 'http://localhost:8090';

    private token:string;

    private handlerResponse = async (response: any) => {
        const authorization = response.headers['authorization'];
        if (authorization) {
            this.token = authorization;
        }
        return await response.json();
    }


    public post() {
        super.registerHandler('post', async (event, args: { url: string, body: any }) => {
            const url = `${this.baseUrl}${args.url}`;
            try {
                const res = await net.fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(args.body),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.token
                    },
                });
                return this.handlerResponse(res);
            } catch (e) {
                return {
                    success: false,
                    errCode: 'fetch.error',
                    errMessage: e.message
                }
            }
        });
    }

    public get() {
        super.registerHandler('get', async (event, args: { url: string, params: any }) => {
            const url = `${this.baseUrl}${args.url}`;
            try {
                const res = await net.fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.token
                    }
                });
                return this.handlerResponse(res);
            }catch (e) {
                return {
                    success: false,
                    errCode: 'fetch.error',
                    errMessage: e.message
                }
            }
        });
    }

    registerEvents(): void {
        this.post();
        this.get();
    }

}

