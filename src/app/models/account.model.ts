export class Account {
    constructor(
        public transactions: Transaction[],
        public id: number,
        public balance: number
    ) {}
}

export class Transaction {
    constructor(
        public id: number,
        public timestamp: string,
        public amount: number,
        public type: Type
    ) {}
}

export enum Type {
  GEBÜHR = 'Gebühr',
  AUFWANDSENTSCHÄDIGUNG = 'Aufwandsentschädigung',
  ZAHLUNG = 'Zahlung',
}

export namespace Type {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case Type.GEBÜHR: return 'Gebühr';
            case Type.AUFWANDSENTSCHÄDIGUNG: return 'Aufwandsentschädigung';
            case Type.ZAHLUNG: return 'Zahlung';
        }
    }
}

