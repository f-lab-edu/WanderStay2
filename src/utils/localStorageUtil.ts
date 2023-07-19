export default class LocalStorage {
    private data: { [key: string]: { value: string; expiry: string } } = {};

    constructor() {
        if (!this.isLocalStorageSupported()) {
            console.error('로컬 스토리지를 지원하지 않습니다.');
            return;
        }
        this.loadData();
    }

    private isLocalStorageSupported(): boolean {
        try {
            const localStorage = typeof window !== 'undefined' ? window.localStorage : null;
            if (!localStorage) {
                return false;
            }

            localStorage?.setItem('test', 'test');
            localStorage?.removeItem('test');
            return true;
        } catch (error) {
            return false;
        }
    }

    private loadData() {
        const localStorage = typeof window !== 'undefined' ? window.localStorage : null;
        if (localStorage) {
            const dataStr = localStorage.getItem('data');
            this.data = dataStr ? JSON.parse(dataStr) : {};
        }
    }

    private saveData() {
        const localStorage = typeof window !== 'undefined' ? window.localStorage : null;
        try {
            if (localStorage) {
                localStorage.setItem('data', JSON.stringify(this.data));
            }
        } catch (error) {
            console.error('데이터 저장 중 오류가 발생했습니다.', error);
        }
    }

    public getItem(key: string): string | null {
        try {
            const item = this.data[key];

            if (!item) return null;

            const now = new Date();
            const expiryDate = new Date(item.expiry);

            if (now > expiryDate) {
                this.removeItem(key);
                this.saveData();
                throw new Error(`키가 만료되었습니다: ${key}`);
            }

            return item.value;
        } catch (error) {
            console.error('항목을 가져오는 중 오류가 발생했습니다.', error);
            return null;
        }
    }

    public setItem(key: string, value: string, ttl?: number) {
        try {
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
        } catch (error) {
            console.error('항목을 설정하는 중 오류가 발생했습니다.', error);
        }
    }

    public removeItem(key: string) {
        const newData: { [key: string]: { value: string; expiry: string } } = {};

        for (const prop in this.data) {
            if (prop !== key) {
                newData[prop] = this.data[prop];
            }
        }

        this.data = newData;
        this.saveData();
    }

    public clear() {
        this.data = {};
        this.saveData();
    }
}
