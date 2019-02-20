import { addLogger } from "./Logger";

const logger = addLogger("Environment.mjs");

class Environment {
    constructor({
        brains,
        chatDataStore
    }) {
        this.d_chatDataStore = chatDataStore;
        // d_trainer
        this.d_brains = brains;
        this.d_tick = 0;
    }

    loadTrainingData() {
        return this.d_chatDataStore.load();
    }

    tick() {
        return Promise.resolve()
        .then(() => {
            logger.info("Tick:" + this.d_tick);
            const tickInput = {};
            const applyInputsP = Object.keys(this.d_brains).map(brainId => {
                const brain = this.d_brains[brainId];
                return brain.applyTick(tickInput)
                .then(tickOutput => {
                    return {
                        brainId,
                        tickOutput,
                    };
                });
            });
            return Promise.all(applyInputsP);
        })
        .then(tickOutputs => {
            logger.info(tickOutputs);
        })
        .then(() => {
            this.d_tick++;
        });
    }
}

export {
    Environment
}
