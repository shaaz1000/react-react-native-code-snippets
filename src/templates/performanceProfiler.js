const vscode = require("vscode");
export const profilePerformance = (func) => {
  const start = performance.now();
  func();
  const end = performance.now();
  vscode.window.showInformationMessage(`Execution time: ${end - start}ms`);
};
