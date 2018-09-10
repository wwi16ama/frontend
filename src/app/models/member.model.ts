export class Member {
    public id: number;
    public firstName: string;
    public lastName: string;
    public birthday: Date;
    public sex: string;
    public status: Status;
    public email: string;
    public address: Address;
    public bankingAccount: string;
    public admissioned: boolean;
    public memberBankingAccount: string;
    public offices: string[];
    public flightAuthorization: Authorization[];
    constructor() {}
}

export enum Status {
    'active',
    'passive',
    'honoraryMember'
}

export class Address {
    public postalCode: number;
    public streetAddress: string;
    public city: string;
    public state: string;
    public country: string;
    constructor() {}
}

export class Authorization {
    public authorization: string;
    public expires: Date;
    constructor() {}
}
