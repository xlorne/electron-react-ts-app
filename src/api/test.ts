import {post} from "./index";

export const test = async () => {
    return post("/user/login",{
        username:"admin",
        password:"admin"
    });
}

