import { addLogger } from "./Logger";

const logger = addLogger("ChatDataStore.mjs");

class ChatDataStore {
    constructor({
        FileReader
    }) {
        this.d_fileReader = FileReader;
        this.d_files = {};
    }

    load() {
        this.d_fileReader.readIbChats()
        .then(data => {
            data.forEach(chatFile => {
                this.d_files[chatFile.filename] = chatFile.messages;
            });
        });
    }
}

export {
    ChatDataStore
};

