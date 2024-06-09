const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

function createComponent(templatePath, componentName) {
  const template = fs.readFileSync(templatePath, "utf8");
  return template.replace(/\$\{componentName\}/g, componentName);
}

function insertTemplate(templateName) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage(
      "Open a file first to manipulate text selections"
    );
    return;
  }

  const fileName = path.basename(
    editor.document.fileName,
    path.extname(editor.document.fileName)
  );
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
  const templatePath = path.join(__dirname, "templates", templateName);

  const content = createComponent(templatePath, componentName);

  editor.edit((editBuilder) => {
    const position = editor.selection.active;
    editBuilder.insert(position, content);
  });
}

function activate(context) {
  const commands = [
    {
      command: "extension.createReactFunctionalComponent",
      template: "reactFunctionalComponent.js",
    },
    {
      command: "extension.createReactClassComponent",
      template: "reactClassComponent.js",
    },
    {
      command: "extension.createReactNativeFunctionalComponent",
      template: "reactNativeFunctionalComponent.js",
    },
    {
      command: "extension.createReactNativeCardComponent",
      template: "reactNativeCard.js",
    },
    {
      command: "extension.createReactNativeModalComponent",
      template: "reactNativeModal.js",
    },
    {
      command: "extension.createReactNativeStackNavigation",
      template: "reactNativeStackNavigation.js",
    },
    {
      command: "extension.createReactNativeTabNavigation",
      template: "reactNativeTabNavigation.js",
    },
    { command: "extension.createApiCall", template: "apiCall.js" },
    { command: "extension.createValidators", template: "validators.js" },
    {
      command: "extension.createDateOperations",
      template: "dateOperations.js",
    },
    {
      command: "extension.createFormValidation",
      template: "formValidation.js",
    },
    { command: "extension.createReduxActions", template: "reduxActions.js" },
    { command: "extension.createReduxReducer", template: "reduxReducer.js" },
    { command: "extension.createAxiosService", template: "axiosService.js" },
    { command: "extension.createReactContext", template: "reactContext.js" },
  ];

  commands.forEach(({ command, template }) => {
    const disposable = vscode.commands.registerCommand(command, () =>
      insertTemplate(template)
    );
    context.subscriptions.push(disposable);
  });
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
