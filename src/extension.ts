import * as vscode from 'vscode';
import { SidebarProvider } from './SidebarProvider';
import { WebviewProvider } from './WebviewProvider';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-ui-demo" is now active!');

	const sidebarProvider = new SidebarProvider();
	context.subscriptions.push(
		vscode.window.registerTreeDataProvider('mySidebarView', sidebarProvider)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-ui-demo.openWebview', () => {
			WebviewProvider.show(context);
		})
	);
}