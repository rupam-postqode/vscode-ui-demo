import * as vscode from 'vscode';

export class SidebarProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    getChildren(): Thenable<vscode.TreeItem[]> {
        return Promise.resolve([
            new vscode.TreeItem("Item 1", vscode.TreeItemCollapsibleState.None),
            new vscode.TreeItem("Item 2", vscode.TreeItemCollapsibleState.None),
            (() => {
                const item = new vscode.TreeItem("Open Webview", vscode.TreeItemCollapsibleState.None);
                item.command = {
                    command: 'vscode-ui-demo.openWebview',
                    title: 'Open Webview'
                };
                return item;
            })()
        ]);
    }
}