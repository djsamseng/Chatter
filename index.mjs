import FileReader from "./FileReader";
import { addLogger } from "./Logger";
import { Environment } from "./Environment";
import { ChatDataStore } from "./ChatDataStore";

const logger = addLogger("index.mjs");

const chatDataStore = new ChatDataStore({
    FileReader
});
const environment = new Environment({
    chatDataStore
});

environment.loadTrainingData();

/*readIbChats()
.then(data => {
    environment.loadMessages(data);
});*/




