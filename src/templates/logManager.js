const path = require("path");
const fs = require("fs");

export const logManager = (message) => {
  const logFile = path.join(vscode.workspace.rootPath, "debug.log");
  fs.appendFileSync(logFile, `${new Date().toISOString()} - ${message}\n`);
};
