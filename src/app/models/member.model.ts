export class Member {
    constructor(
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
        public offices: Office[],
        public flightAuthorization: Authorization[],
        public id?: number
    ) {}
}

export enum Gender {
    MALE = 'Männlich',
    FEMALE = 'Weiblich',
    OTHER = 'Divers'
}

export enum Status {
    ACTIVE = 'Aktiv',
    PASSIVE = 'Passiv',
    HONORARYMEMBER = 'Ehrenmitglied'
}

export class Address {
    constructor(
        public postalCode: number,
        public streetAddress: string,
        public city: string
    ) {}
}

export class Office {
    constructor(
        public title: OfficeEnum
    ) {}
}

export enum OfficeEnum {
    VORSTANDSVORSITZENDER = 'Vorstandsvorsitzender',
    SYSTEMADMINISTRATOR = 'Systemadministrator',
    KASSIERER = 'Kassierer',
    FLUGWART = 'Flugwart',
    IMBETRIEBSKONTROLLTURMARBEITEND = 'Kontrollturmwächter'
}

export class Authorization {
    constructor(
        public authorization: AuthorizationEnum,
        public dateOfIssue: string,
        public expires: string
    ) {}
}

export enum AuthorizationEnum {
    PPLA = 'PPL-A',
    PPLB = 'PPL-B',
    BZFI = 'BZFI',
    BZFII = 'BZFII',
    LEHRBEFUGNIS = 'Lehrbefugnis'
}
