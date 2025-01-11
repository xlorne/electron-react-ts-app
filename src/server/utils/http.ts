import {net} from "electron";
import * as net2 from "net";

export class HttpUtils {

    public static async post(url: string, data: any, headers?: any) {
        return await this.request(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                ...headers
            },
        });
    }


    public static async get(url: string, headers?: any) {
        return await this.request(url, {
            method: 'GET',
            headers: {
                ...headers
            }
        });
    }

    public static async request(url: string, options?: any) {
        return await net.fetch(url, {
            method: 'GET',
            ...options
        });
    }
}
