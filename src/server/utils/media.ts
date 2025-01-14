import MediaInfoFactory from 'mediainfo.js'
import {FileUtils} from "@/server/utils/file";
import {app} from 'electron';
import * as nodePath from 'node:path';

export class MediaUtils {

    public static loadMediaInfo = async (file: string) => {
        return new Promise((resolve, reject) => {
            MediaInfoFactory({
                locateFile:(path, prefix)=>{
                    console.log('prefix', prefix);
                    console.log('path', path);

                    if (path.endsWith('.wasm')) {
                        // 在主进程中使用绝对路径
                        if (process.type === 'browser') {
                            const wasmPath = app.isPackaged
                                ? nodePath.join(process.resourcesPath, '.webpack/main/assets', path)
                                : nodePath.join(__dirname, 'assets', path);
                            console.log('wasmPath', wasmPath);
                            return 'file:///Users/lorne/Downloads/MediaInfoModule.wasm';
                        }
                        // 在渲染进程中使用相对路径
                        return `assets/${path}`;
                    }
                    return prefix + path;
                }
            }).then((mediaInfo) => {
                let size = FileUtils.statSync(file).size;
                const getSize = () => size;

                const readChunk = (chunkSize: number, offset: number): Promise<Uint8Array> => {
                    return FileUtils.readFileStream(file, {
                        start: offset,
                        end: offset + chunkSize
                    })
                };

                mediaInfo
                    .analyzeData(getSize, readChunk).then((result) => {
                    mediaInfo.close();
                    resolve(result);
                });
            });
        });
    }



}
