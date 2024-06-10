const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

const { errorReporter } = require("./templates/errorReporter");
const { interactiveStackTrace } = require("./templates/interactiveStackTrace");
const { visualizeCodePath } = require("./templates/codePathVisualizer");
const { profilePerformance } = require("./templates/performanceProfiler");
const { logManager } = require("./templates/logManager");
const { addBreakpoint } = require("./templates/breakpointManager");
const { detectMemoryLeaks } = require("./templates/memoryLeakDetector");
const { visualizeDependencies } = require("./templates/dependencyVisualizer");
const { diagnoseIssues } = require("./templates/issueDiagnoser");
const {
  integrateWithExternalTools,
} = require("./templates/externalToolIntegrator");

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

function generateApiDocumentation() {
  const outputPath = path.join(vscode.workspace.rootPath, "docs");
  const inputPath = vscode.workspace.rootPath;

  exec(
    `npx apidoc -i ${inputPath} -o ${outputPath}`,
    (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        vscode.window.showErrorMessage(`stderr: ${stderr}`);
        return;
      }
      vscode.window.showInformationMessage(
        "API documentation generated successfully!"
      );
    }
  );
}

function activate(context) {
  const commands = [
    // Existing commands
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
    { command: "extension.createExpressRoute", template: "expressRoute.js" },
    {
      command: "extension.createExpressMiddleware",
      template: "expressMiddleware.js",
    },
    { command: "extension.createReactHOC", template: "reactHOC.js" },
    { command: "extension.createReactHook", template: "reactHook.js" },
    {
      command: "extension.createReactNativeStylesheet",
      template: "reactNativeStylesheet.js",
    },
    {
      command: "extension.createReactLoginComponent",
      template: "reactLogin.js",
    },
    {
      command: "extension.createReactSignupComponent",
      template: "reactSignup.js",
    },
    {
      command: "extension.createReactNativeLoginComponent",
      template: "reactNativeLogin.js",
    },
    {
      command: "extension.createReactNativeSignupComponent",
      template: "reactNativeSignup.js",
    },
    {
      command: "extension.createExpressJwtMiddleware",
      template: "expressJwtMiddleware.js",
    },
    { command: "extension.createReactAuthHOC", template: "reactAuthHOC.js" },
    {
      command: "extension.createApiDocumentation",
      template: "apiDocumentation.js",
    },
    { command: "extension.createReactButton", template: "reactButton.js" },
    { command: "extension.createReactCard", template: "reactCard.js" },
    {
      command: "extension.createReactNativeButton",
      template: "reactNativeButton.js",
    },
    { command: "extension.createLogger", template: "logger.js" },
    { command: "extension.createNestModule", template: "module.ts" },
    { command: "extension.createNestController", template: "controller.ts" },
    { command: "extension.createNestService", template: "service.ts" },
    { command: "extension.createAuthModule", template: "auth.module.ts" },
    { command: "extension.createAuthService", template: "auth.service.ts" },
    {
      command: "extension.createAuthController",
      template: "auth.controller.ts",
    },
    { command: "extension.createJwtAuthGuard", template: "jwt-auth.guard.ts" },
    { command: "extension.createJwtStrategy", template: "jwt.strategy.ts" },
    {
      command: "extension.createExpressWebSocketServer",
      template: "express-websocket-server.js",
    },
    {
      command: "extension.createNestWebSocketGateway",
      template: "nest-websocket-gateway.ts",
    },
    {
      command: "extension.createReactWebSocketClient",
      template: "react-websocket-client.js",
    },
    {
      command: "extension.createReactNativeWebSocketClient",
      template: "react-native-websocket-client.js",
    },
    { command: "extension.createDebounce", template: "debounce.js" },
    { command: "extension.createThrottle", template: "throttle.js" },
    {
      command: "extension.createLocalStorageUtil",
      template: "localStorageUtil.js",
    },
    { command: "extension.createCache", template: "caching.js" },
    { command: "extension.createEncrypt", template: "encryption.js" },
    { command: "extension.createDecrypt", template: "encryption.js" },
    // New debugging commands
    { command: "extension.reportError", template: "errorReporter.js" },
    {
      command: "extension.showStackTrace",
      template: "interactiveStackTrace.js",
    },
    {
      command: "extension.visualizeCodePath",
      template: "codePathVisualizer.js",
    },
    {
      command: "extension.profilePerformance",
      template: "performanceProfiler.js",
    },
    { command: "extension.manageLogs", template: "logManager.js" },
    { command: "extension.addBreakpoint", template: "breakpointManager.js" },
    {
      command: "extension.detectMemoryLeaks",
      template: "memoryLeakDetector.js",
    },
    {
      command: "extension.visualizeDependencies",
      template: "dependencyVisualizer.js",
    },
    { command: "extension.diagnoseIssues", template: "issueDiagnoser.js" },
    {
      command: "extension.integrateWithExternalTools",
      template: "externalToolIntegrator.js",
    },
  ];

  commands.forEach(({ command, template }) => {
    const disposable = vscode.commands.registerCommand(command, () =>
      insertTemplate(template)
    );
    context.subscriptions.push(disposable);
  });

  const disposableGenerateApiDocumentation = vscode.commands.registerCommand(
    "extension.generateApiDocumentation",
    generateApiDocumentation
  );
  context.subscriptions.push(disposableGenerateApiDocumentation);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
