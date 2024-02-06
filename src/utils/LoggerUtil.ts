import winston from "winston";
import path from "path";
import moment from "moment-timezone";

const currentDir = __dirname;
// Go one level above (back to 'src')
const srcDir = path.resolve(currentDir, "..");

// Change to 'logging' folder
const loggingDir = path.resolve(srcDir, "logging");

// Function to format log entries with timestamp and timezone
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
   return `${timestamp} [${level}]: ${message}`;
});

// Set desired timezone
const timeZone = "Europe/London";
//const timeZone = "Asia/Kolkata";

const logger = winston.createLogger({
   format: winston.format.combine(
      winston.format.timestamp({ format: () => moment().tz(timeZone).format()}),
      customFormat
   ),
   transports: [
      new winston.transports.Console({ level: "debug" }),
      new winston.transports.File({
         filename: path.join(loggingDir, "test_run.log"),
         maxFiles: 25, // Number of log files to retain
         maxsize: 50 * 1024, // 10 KB, specify the debug log file size in bytes
         level: "info",
      }),
      new winston.transports.File({
         filename: path.join(loggingDir, "test_error.log"),
         maxFiles: 25, // Number of log files to retain
         maxsize: 50 * 1024, // 10 KB, specify the error log file size in bytes
         level: "error",
      }),
   ],
});

export default logger;
