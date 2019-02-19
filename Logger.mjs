import winston from "winston";

function addLogger(cat) {
    winston.loggers.add(cat, {
        format: winston.format.combine(
            winston.format.label({
                label: cat,
            }),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.Console({
                format: winston.format.json(),
            }),
        ],
    });

    return winston.loggers.get(cat);
}

export {
    addLogger,
};