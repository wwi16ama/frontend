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
        public text: string
    ) {}
}

export class AddTransaction {
    constructor(
        public amount: number,
        public text: string
    ) {}
}

