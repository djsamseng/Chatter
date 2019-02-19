import { addLogger } from "./Logger";

const logger = addLogger("Environment.mjs");

class Environment {
    constructor({
        chatDataStore
    }) {
        this.d_chatDataStore = chatDataStore;
    }

    loadTrainingData() {
        this.d_chatDataStore.load();
    }
}

export {
    Environment
}
