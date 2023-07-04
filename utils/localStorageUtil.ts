export default class LocalStorage {
    private data: { [key: string]: { value: string; expiry: string } } = {};

    constructor() {
        this.loadData();
    }

    private loadData(): void {
        const localStorage = typeof window !== 'undefined' ? window.localStorage : null;
        const dataStr = localStorage ? localStorage.getItem('data') : null;
        this.data = dataStr ? JSON.parse(dataStr) : {};
    }

    private saveData(): void {
        const localStorage = typeof window !== 'undefined' ? window.localStorage : null;
        if (localStorage) {
            localStorage.setItem('data', JSON.stringify(this.data));
        }
    }

    public getItem(key: string): string | null {
        const item = this.data[key];

        if (!item) return null;

        const now = new Date();
        const expiryDate = new Date(item.expiry);

        if (now > expiryDate) {
            delete this.data[key];
            this.saveData();
            return null;
        }

        return item.value;
    }

    public setItem(key: string, value: string, ttl?: number): void {
        const now = new Date();
        let expiryDate: Date | undefined = undefined;

        if (ttl) {
            expiryDate = new Date(now.getTime() + ttl * 3600000);
        }

        const item = {
            value: value,
            expiry: expiryDate ? expiryDate.toISOString() : ''
        };

        this.data[key] = item;
        this.saveData();
    }

    public removeItem(key: string): void {
        delete this.data[key];
        this.saveData();
    }

    public clear(): void {
        this.data = {};
        this.saveData();
    }
}
