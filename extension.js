// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method returns the path of the current file open
// if it is saved. Else, returns error

const getCurrentFile = () => { 
    // Get current text editor
    let editor = vscode.window.activeTextEditor;

    if(!editor) {
        return {
            error: true,
            errorMessage: 'Open a file first!'
        };
    } else if (editor.document.isUntitled) {
        return {
            error: true,
            errorMessage: 'Save the destination file first'
        };
    }
    return {
        filename: editor.document.fileName
    };
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const activate = (context) => {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.simpleImport', function () {
        // The code you place here will be executed every time your command is executed
        const {filename, error, errorMessage} = getCurrentFile();

        if(error) {
            vscode.window.showErrorMessage(errorMessage);
            return;
        }
        vscode.window.showInformationMessage('Destination: ' + filename);
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;