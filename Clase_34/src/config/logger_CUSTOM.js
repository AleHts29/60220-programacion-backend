import winston, { transports } from "winston";
import config from "./config.js"

// Custom logger Options
const customLevelsOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        http: 3,
        info: 4,
        debug: 5
    },
    colors: {
        fatal: 'red',
        error: 'yellow',
        warning: 'magenta',
        info: 'blue',
        debug: 'white'
    }
}


// *orange no existe, estos son los disponibles: Font foreground colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`,`cyan`, `white`, `gray`, `grey`.
winston.addColors(customLevelsOptions.colors)

// logger dev
const devLogger = winston.createLogger({
    // levels
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelsOptions.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './errors.log',
            level: "warning",
            format: winston.format.simple()
        }),

    ]
})

// logger prod
const prodLogger = winston.createLogger({
    levels: customLevelsOptions.levels,
    // Declaramos transport
    transports: [
        // definimos el transport de consola
        new winston.transports.Console({ level: "http" }),
        new winston.transports.File({ filename: './errors.log', level: "warning" })
    ]
})


export const addLogger = (req, res, next) => {
    if (config.environment === 'production') {
        req.logger = prodLogger;
        req.logger.error(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
        req.logger.warning(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)

        req.logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)

        req.logger.debug(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    } else {
        req.logger = devLogger;
        req.logger.error(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
        req.logger.warning(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)

        req.logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)

        req.logger.debug(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    }

    next()

}


