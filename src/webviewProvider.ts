import * as vscode from "vscode";
import { PythonFact } from "./factLoader";

export class WebviewProvider {
  private static currentPanel: vscode.WebviewPanel | undefined;

  static showFactWebview(
    context: vscode.ExtensionContext,
    fact: PythonFact
  ): void {
    // Close existing webview if open
    if (WebviewProvider.currentPanel) {
      WebviewProvider.currentPanel.dispose();
    }

    // Create new webview panel
    WebviewProvider.currentPanel = vscode.window.createWebviewPanel(
      "pythonFact",
      `Python Fact: ${fact.title}`,
      vscode.ViewColumn.Beside,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      }
    );

    // Set webview content
    WebviewProvider.currentPanel.webview.html =
      WebviewProvider.getWebviewContent(fact);

    // Handle webview disposal
    WebviewProvider.currentPanel.onDidDispose(() => {
      WebviewProvider.currentPanel = undefined;
    });
  }

  private static getWebviewContent(fact: PythonFact): string {
    const examplesHtml = fact.examples
      ? `<h3>Examples:</h3>
             <div class="code-container">
                 <pre><code>${fact.examples.join('\n')}</code></pre>
             </div>`
      : "";

    const linksHtml = fact.links
      ? `<h3>Learn More:</h3>
             <ul>
             ${fact.links
               .map(
                 (link) =>
                   `<li><a href="${link.url}" target="_blank">${link.title}</a></li>`
               )
               .join("")}
             </ul>`
      : "";

    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${fact.title}</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        line-height: 1.6;
                        color: var(--vscode-foreground);
                        background-color: var(--vscode-editor-background);
                        padding: 20px;
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    h1 {
                        color: var(--vscode-textLink-foreground);
                        border-bottom: 2px solid var(--vscode-textLink-foreground);
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                    }
                    h3 {
                        color: var(--vscode-textLink-foreground);
                        margin-top: 30px;
                        margin-bottom: 15px;
                        font-size: 1.2em;
                    }
                    .code-container {
                        margin: 15px 0;
                        border-radius: 6px;
                        overflow: hidden;
                        background-color: var(--vscode-textBlockQuote-background);
                        border: 1px solid var(--vscode-textBlockQuote-border);
                    }
                    pre {
                        background-color: var(--vscode-textBlockQuote-background);
                        padding: 16px;
                        margin: 0;
                        overflow-x: auto;
                        font-size: 14px;
                        line-height: 1.4;
                        color: var(--vscode-textPreformat-foreground);
                    }
                    code {
                        font-family: 'Courier New', Courier, monospace;
                        font-size: 14px;
                        color: var(--vscode-textPreformat-foreground);
                        background: none;
                        padding: 0;
                        border: none;
                    }
                    
                    /* Ensure clean code display */
                    pre code {
                        display: block;
                        white-space: pre;
                        word-wrap: normal;
                        background: none !important;
                    }
                    
                    a {
                        color: var(--vscode-textLink-foreground);
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    ul {
                        padding-left: 20px;
                    }
                    li {
                        margin-bottom: 8px;
                    }
                    .fact-emoji {
                        font-size: 2em;
                        margin-right: 10px;
                    }
                    .fact-id {
                        font-size: 0.8em;
                        color: var(--vscode-descriptionForeground);
                        margin-bottom: 10px;
                        padding: 6px 12px;
                        background-color: var(--vscode-badge-background);
                        border-radius: 12px;
                        display: inline-block;
                        font-weight: 500;
                    }
                    p {
                        margin-bottom: 16px;
                        font-size: 15px;
                    }
                    strong {
                        color: var(--vscode-textPreformat-foreground);
                        font-weight: 600;
                    }
                    
                    /* Responsive design */
                    @media (max-width: 600px) {
                        body {
                            padding: 15px;
                        }
                        .code-container {
                            margin: 10px -5px;
                        }
                        pre {
                            padding: 15px;
                            font-size: 13px;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="fact-id">Fact ID: ${fact.id}</div>
                <h1><span class="fact-emoji">🐍</span>${fact.title}</h1>
                <p><strong>${fact.shortDescription}</strong></p>
                <p>${fact.detailedDescription}</p>
                ${examplesHtml}
                ${linksHtml}
            </body>
            </html>
        `;
  }

  static dispose(): void {
    if (WebviewProvider.currentPanel) {
      WebviewProvider.currentPanel.dispose();
      WebviewProvider.currentPanel = undefined;
    }
  }
}
