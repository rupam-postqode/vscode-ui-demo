import * as vscode from 'vscode';
import * as path from 'path';

export class WebviewProvider {
    public static show(context: vscode.ExtensionContext) {
        const panel = vscode.window.createWebviewPanel(
            'reactWebview',
            'React Webview',
            vscode.ViewColumn.One,
            { enableScripts: true }
        );

        const appPath = path.join(context.extensionPath, 'webview-ui', 'build');
        const indexHtml = path.join(appPath, 'index.html');
        const htmlContent = require('fs').readFileSync(indexHtml, 'utf8');

        // Fix resource paths
        const fixedHtml = htmlContent
            .replace(/(href|src)="\/(.*?)"/g, `$1="${panel.webview.asWebviewUri(vscode.Uri.file(appPath))}/$2"`);

        panel.webview.html = fixedHtml;
    }
}