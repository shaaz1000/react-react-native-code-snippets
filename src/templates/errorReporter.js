import { logManager } from "./logManager";

const vscode = require("vscode");
export const errorReporter = (error) => {
  vscode.window.showErrorMessage(`Error: ${error.message}`);
  logManager(error.message);
};
