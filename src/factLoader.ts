import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export interface PythonFact {
    id: string;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    examples?: string[];
    links?: { title: string; url: string }[];
}

export class FactLoader {
    private facts: Map<string, PythonFact> = new Map();
    private factIds: string[] = [];

    constructor(private context: vscode.ExtensionContext) {}

    async loadFacts(): Promise<void> {
        const factsDir = path.join(this.context.extensionPath, 'src', 'facts');
        
        try {
            const files = fs.readdirSync(factsDir);
            const jsonFiles = files.filter(file => file.endsWith('.json'));

            for (const file of jsonFiles) {
                const filePath = path.join(factsDir, file);
                const content = fs.readFileSync(filePath, 'utf8');
                const fact: PythonFact = JSON.parse(content);
                
                this.facts.set(fact.id, fact);
                this.factIds.push(fact.id);
            }

            console.log(`Loaded ${this.facts.size} Python facts`);
        } catch (error) {
            console.error('Error loading facts:', error);
        }
    }

    getAllFactIds(): string[] {
        return [...this.factIds];
    }

    getFact(id: string): PythonFact | undefined {
        return this.facts.get(id);
    }

    getRandomFact(excludeIds: string[] = []): PythonFact | undefined {
        const availableIds = this.factIds.filter(id => !excludeIds.includes(id));
        
        if (availableIds.length === 0) {
            return undefined;
        }

        const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
        return this.facts.get(randomId);
    }
}