const winston = require("winston");
require("winston-loggly-bulk");

// Define log levels
const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "blue",
  },
};

// Setup logger for different environments
const devFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(
    ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`
  )
);

const prodFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

// Create logger instance
const logger = winston.createLogger({
  levels: logLevels.levels,
  format: process.env.NODE_ENV === "production" ? prodFormat : devFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

// Integrate with Loggly
if (process.env.LOGGLY_TOKEN) {
  logger.add(
    new winston.transports.Loggly({
      token: process.env.LOGGLY_TOKEN,
      subdomain: "your-subdomain",
      tags: ["Winston-NodeJS"],
      json: true,
    })
  );
}

module.exports = logger;
