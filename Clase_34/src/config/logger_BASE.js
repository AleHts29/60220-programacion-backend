import winston from 'winston';

// definimos configuracion del logger
const logger = winston.createLogger({
    // Declaramos transport
    transports: [
        // definimos el transport de consola
        new winston.transports.Console({ level: "http" }),
        new winston.transports.File({ filename: './errors.log', level: "warn" })
    ]
})


// Declaramos un middleware
export const addLogger = (req, res, next) => {
    req.logger = logger;

    req.logger.error(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.warn(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)

    req.logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)

    req.logger.debug(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)


    next()

}
