import fs from "fs";
import { addLogger } from "./Logger";

const logger = addLogger("FileReader.mjs");

const IBCHATS_DIR = "/Users/sseng1/BB/IBChats/";

function readFile(filename) {
    return new Promise(resolve => {
        fs.readFile(IBCHATS_DIR + filename, {
            encoding: "utf-8"
        }, (error, file ) => {
            if (error) {
                throw error;
            }
            const messages = JSON.parse(file);
            messages.forEach(message => {
                message.timeMS = new Date(message.time).getTime();
            });
            resolve(messages);
        });
    });
}

function readIbChats() {
    return new Promise(resolve => {
        fs.readdir(IBCHATS_DIR, (error, files) => {
            if (error) {
                logger.error("Failed to get IBChat files", error);
                return;
            }
            const resultPromises = files.map(filename => {
                return readFile(filename)
                .then(messages => {
                    return {
                        filename,
                        messages
                    };
                });
            });
            resolve(Promise.all(resultPromises));
        });
    });
    
}

export default {
    readIbChats
};
