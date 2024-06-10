export const addBreakpoint = (file, line) => {
  const uri = vscode.Uri.file(file);
  const position = new vscode.Position(line - 1, 0);
  vscode.debug.addBreakpoints([
    new vscode.SourceBreakpoint(new vscode.Location(uri, position)),
  ]);
};
