export class Member {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: string,
        public gender: Gender,
        public status: Status,
        public email: string,
        public address: Address,
        public bankingAccount: string,
        public admissioned: boolean,
        public memberBankingAccount: string,
        public offices: string[],
        public flightAuthorization: Authorization[]
    ) {}
}

export enum Gender {
    male = 'Männlich',
    female = 'Weiblich',
    other = 'Divers'
}

export enum Status {
    active = 'Aktiv',
    passive = 'Passiv',
    honoraryMember = 'Ehrenmitglied'
}

export class Address {
    constructor(
        public postalCode: number,
        public streetAddress: string,
        public city: string
    ) {}
}

export class Authorization {
    constructor(
        public authorization: string,
        public dateOfIssue: string,
        public expires: string
    ) {}
}
