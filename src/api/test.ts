import {post} from "./index";

export const login = async () => {
    return post("/user/login",{
        username:"admin",
        password:"admin"
    });
}

