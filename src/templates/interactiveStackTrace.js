const vscode = require("vscode");
export const interactiveStackTrace = (error) => {
  const stack = error.stack.split("\n").map((line) => line.trim());
  stack.forEach((line) => {
    const match = line.match(/\((.*):(\d+):(\d+)\)/);
    if (match) {
      const [, file, line, column] = match;
      const uri = vscode.Uri.file(file);
      vscode.window.showTextDocument(uri).then((editor) => {
        const position = new vscode.Position(line - 1, column - 1);
        editor.selection = new vscode.Selection(position, position);
        editor.revealRange(new vscode.Range(position, position));
      });
    }
  });
};
