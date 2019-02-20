import FileReader from "./FileReader";
import { addLogger } from "./Logger";
import { Environment } from "./Environment";
import { ChatDataStore } from "./ChatDataStore";

const logger = addLogger("index.mjs");

const brains = {};
const chatDataStore = new ChatDataStore({
    FileReader,
});
const environment = new Environment({
    brains,
    chatDataStore,
});

environment.loadTrainingData()
.then(() => {
    return environment.tick();
})
.then(() => {
    return environment.tick();
});



