import * as vscode from 'vscode';

export class FactStorage {
    private static readonly SHOWN_FACTS_KEY = 'pythonFacts.shownFacts';

    constructor(private context: vscode.ExtensionContext) {}

    getShownFacts(): string[] {
        return this.context.globalState.get(FactStorage.SHOWN_FACTS_KEY, []);
    }

    async addShownFact(factId: string): Promise<void> {
        const shownFacts = this.getShownFacts();
        if (!shownFacts.includes(factId)) {
            shownFacts.push(factId);
            await this.context.globalState.update(FactStorage.SHOWN_FACTS_KEY, shownFacts);
        }
    }

    async resetShownFacts(): Promise<void> {
        await this.context.globalState.update(FactStorage.SHOWN_FACTS_KEY, []);
    }

    hasShownAllFacts(allFactIds: string[]): boolean {
        const shownFacts = this.getShownFacts();
        return allFactIds.every(id => shownFacts.includes(id));
    }
}