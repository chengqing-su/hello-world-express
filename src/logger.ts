import winston from "winston";

export default winston.createLogger({
  silent: process.env.NODE_ENV === "test",
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  )
});
