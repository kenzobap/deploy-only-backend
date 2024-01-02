import path from 'path'
import winston from 'winston'
import { createLogger, format, transports } from 'winston'
const filename = path.join(__dirname, 'create-file-logs.log')

const logger = winston.createLogger({
    // transports:
    //     [
    //         new winston.transports.Console()
    //     ],
    transports:
        [
            new winston.transports.Console(),
            new winston.transports.File({ filename })
        ],
    //format timestamp
    format: format.combine(
        format.label({ label: '[my-service]' }),
        format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        //
        // The simple format outputs
        // `${level}: ${message} ${[Object with everything else]}`
        //
        format.simple()
        //
        // Alternatively you could use this custom printf format if you
        // want to control where the timestamp comes in your final message.
        // Try replacing `format.simple()` above with this:
        //
        // format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    )
})
export default logger