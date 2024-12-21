export const get = async (url: string, params?: any) => {
    //@ts-ignore
    return await window.ipcRenderer.invoke('get',{
        url,
        params
    });
}

export const post = async (url: string, data: any) => {
    //@ts-ignore
    return await window.ipcRenderer.invoke('post', {
        url,
        body:data
    });
}


export const invoke = async (key: string, args: any) => {
    //@ts-ignore
    return await window.ipcRenderer.invoke(key, args);
}
