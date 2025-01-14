import MediaInfoFactory from 'mediainfo.js'
import {FileUtils} from "@/server/utils/file";

export class MediaUtils {

    public static loadMediaInfo = async (file: string) => {
        return new Promise((resolve, reject) => {
            MediaInfoFactory({
                //This method will be called before loading the WASM file. It should return the actual URL
                locateFile:(path, prefix)=>{
                    if (path.endsWith('.wasm')) {
                        // 必须替换成一个http的地址才行
                        return 'http://localhost:8090/' + path;
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
