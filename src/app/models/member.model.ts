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
        public offices: Office[],
        public flightAuthorization: Authorization[],
        public id?: number,
        public memberBankingAccount?: string
    ) {}
}

export enum Gender {
    MALE = 'Männlich',
    FEMALE = 'Weiblich'
}

export namespace Gender {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case Gender.MALE: return 'MALE';
            case Gender.FEMALE: return 'FEMALE';
        }
    }
}

export enum Status {
    ACTIVE = 'Aktiv',
    PASSIVE = 'Passiv',
    HONORARYMEMBER = 'Ehrenmitglied'
}

export namespace Status {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case Status.ACTIVE: return 'ACTIVE';
            case Status.PASSIVE: return 'PASSIVE';
            case Status.HONORARYMEMBER: return 'HONORARYMEMBER';
        }
    }
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

export namespace OfficeEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case OfficeEnum.VORSTANDSVORSITZENDER: return 'VORSTANDSVORSITZENDER';
            case OfficeEnum.SYSTEMADMINISTRATOR: return 'SYSTEMADMINISTRATOR';
            case OfficeEnum.KASSIERER: return 'KASSIERER';
            case OfficeEnum.FLUGWART: return 'FLUGWART';
            case OfficeEnum.IMBETRIEBSKONTROLLTURMARBEITEND: return 'IMBETRIEBSKONTROLLTURMARBEITEND';
        }
    }
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

export namespace AuthorizationEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case AuthorizationEnum.PPLA: return 'PPLA';
            case AuthorizationEnum.PPLB: return 'PPLB';
            case AuthorizationEnum.BZFI: return 'BZFI';
            case AuthorizationEnum.BZFII: return 'BZFII';
            case AuthorizationEnum.LEHRBEFUGNIS: return 'LEHRBEFUGNIS';
        }
    }
}
