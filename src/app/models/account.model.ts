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
  MITGLIEDSBEITRAG = 'Jährlicher Mitgliedsbeitrag',
  GEBÜHRFLUGZEUG = 'Gebühren für die Flugzeugnutzung',
  GUTSCHRIFTAMT = 'Gutschrift für ein Amt',
  GUTSCHRIFTLEISTUNG = 'Gutschrift für eine Leistung',
  EINZAHLUNG = 'Einzahlung auf das Kundenkonto'
}

export namespace Type {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case Type.MITGLIEDSBEITRAG: return 'Jährlicher Mitgliedsbeitrag';
            case Type.GEBÜHRFLUGZEUG: return 'Gebühren für die Flugzeugnutzung';
            case Type.GUTSCHRIFTAMT: return 'Gutschrift für ein Amt';
            case Type.GUTSCHRIFTLEISTUNG: return 'Gutschrift für eine Leistung';
            case Type.EINZAHLUNG: return 'Einzahlung auf das Kundenkonto';
        }
    }
}

