import * as fs from "node:fs";
import * as path from "node:path";
import * as crypto from "crypto";

export class FileUtils {

    public static resolve(file: string, base?: string): string {
        return path.resolve(file, base) + path.sep;
    }

    public static removeFile = (file: string) => {
        fs.existsSync(file) && fs.unlinkSync(file);
    }

    public static removeDirectory = (dir: string) => {
        fs.existsSync(dir) && fs.rmdirSync(dir, {recursive: true});
    }

    public static readFileBase64 = (path: string) => {
        return fs.readFileSync(path).toString('base64');
    }

    public static readFileString = (file: string) => {
        return fs.readFileSync(file, 'utf8').toString();
    }

    public static readFileSize = (file: string) => {
        return fs.statSync(file).size;
    }

    public static readFiles = (file: string) => {
        return fs.readdirSync(file);
    }


    public static getFileType = (file: string) => {
        return file.split('.').pop();
    }

    public static copyFile = (source: string, target: string) => {
        const targetFile = path.resolve(target);
        if (fs.existsSync(source)) {
            if (source === targetFile) {
                return;
            }

            if (fs.existsSync(targetFile)) {
                FileUtils.removeFile(targetFile);
            }
            fs.copyFileSync(source, targetFile);
        }
    }

    public static isFile = (file: string) => {
        return fs.statSync(file).isFile();
    }

    public static writeBase64 = async (file: string, data: string) => {
        const base64Data = data.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, 'base64');
        return fs.writeFileSync(file, buffer);
    }

    public static writeBufferData = async (file: string, data: ArrayBuffer) => {
        const buffer = Buffer.from(data);
        return fs.writeFileSync(file, buffer);
    }

    /**
     * 计算文件的 MD5 值
     * @param file 文件路径
     * @param maxBytes 读取的最大字节数 默认 10MB
     */
    public static md5 = (file: string, maxBytes = 10 * 1024 * 1024): Promise<string> => {
        return new Promise((resolve, reject) => {
            const hash = crypto.createHash('md5');
            const stream = fs.createReadStream(file, {highWaterMark: 1024 * 1024}); // 默认 1MB 缓冲区

            let bytesRead = 0;
            stream.on('data', (chunk) => {
                bytesRead += chunk.length;

                if (bytesRead <= maxBytes) {
                    hash.update(chunk);
                } else {
                    // 只取前 10MB 的数据
                    const remainingBytes = maxBytes - (bytesRead - chunk.length);
                    if (remainingBytes > 0) {
                        hash.update(chunk.slice(0, remainingBytes));
                    }
                    // 读取完 10MB 就停止
                    stream.destroy();
                    resolve(hash.digest('hex'));
                }
            });

            stream.on('end', () => {
                resolve(hash.digest('hex'));
            });

            stream.on('error', (error) => {
                reject(error);
            });
        });
    };

    public static readDirectory = (dir: string, filters?: string[]): string[] => {
        const files = fs.readdirSync(dir);
        return files.filter(item => {
            if (filters) {
                const type = item.split('.').pop();
                return filters.includes(type);
            } else {
                return true;
            }
        }).map(file => path.resolve(dir, file));
    }

    public static isDirectory = (file: string): boolean => {
        return fs.statSync(file).isDirectory();
    }

    public static writeFileString = (file: string, data: string) => {
        fs.writeFileSync(file, data);
    }

    public static statSync = (file: string) => {
        return fs.statSync(file);
    }

    public static readFileStream = (file: string, options: any): Promise<Uint8Array> => {
        return new Promise((resolve, reject) => {
            const data: Uint8Array[] = [];
            const stream = fs.createReadStream(file, options);
            stream.on('data', (chunk: Uint8Array) => {
                data.push(chunk);
            });

            stream.on('end', () => {
                resolve(Buffer.concat(data));
            });
        });
    }

    public static isExists = (file: string) => {
        return fs.existsSync(file);
    }


    public static mkdir = (dir: string) => {
        fs.mkdirSync(dir, {recursive: true});
    }

}
