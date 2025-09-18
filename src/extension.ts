import * as vscode from 'vscode';
import { FactLoader } from './factLoader';
import { FactStorage } from './factStorage';
import { WebviewProvider } from './webviewProvider';

export async function activate(context: vscode.ExtensionContext) {
    console.log('Python Facts and Teacher extension is now active!');

    // Initialize services
    const factLoader = new FactLoader(context);
    const factStorage = new FactStorage(context);
    
    // Load all facts from JSON files
    await factLoader.loadFacts();

    // Debounce mechanism to prevent duplicate notifications
    let lastFactTime = 0;
    const DEBOUNCE_DELAY = 2000; // 2 seconds

    const showFactWithDebounce = () => {
        const now = Date.now();
        if (now - lastFactTime > DEBOUNCE_DELAY) {
            lastFactTime = now;
            showRandomFact(factLoader, factStorage, context);
        }
    };

    // Listen for Python file opens
    const onDidOpenTextDocument = vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.languageId === 'python') {
            showFactWithDebounce();
        }
    });

    // Listen for new Python file creation
    const onDidCreateFiles = vscode.workspace.onDidCreateFiles((event) => {
        const pythonFiles = event.files.filter(uri => uri.path.endsWith('.py'));
        if (pythonFiles.length > 0) {
            showFactWithDebounce();
        }
    });

    // Command to manually show a fact (bypass debounce)
    const showFactCommand = vscode.commands.registerCommand('python-facts-and-teacher.showFact', () => {
        showRandomFact(factLoader, factStorage, context);
    });

    context.subscriptions.push(onDidOpenTextDocument, onDidCreateFiles, showFactCommand);
}

async function showRandomFact(factLoader: FactLoader, factStorage: FactStorage, context: vscode.ExtensionContext) {
    const allFactIds = factLoader.getAllFactIds();
    const shownFactIds = factStorage.getShownFacts();

    // If all facts have been shown, reset the storage
    if (factStorage.hasShownAllFacts(allFactIds)) {
        await factStorage.resetShownFacts();
        console.log('All facts have been shown, resetting the list');
    }

    // Get a random fact that hasn't been shown yet
    const fact = factLoader.getRandomFact(factStorage.getShownFacts());
    
    if (!fact) {
        console.log('No facts available');
        return;
    }

    // Mark this fact as shown
    await factStorage.addShownFact(fact.id);

    // Show the fact popup
    vscode.window.showInformationMessage(
        `🐍 Python Fun Fact: ${fact.title} - ${fact.shortDescription}`,
        'Show More',
        'Dismiss'
    ).then(selection => {
        if (selection === 'Show More') {
            WebviewProvider.showFactWebview(context, fact);
        }
    });
}

export function deactivate() {
    WebviewProvider.dispose();
}
