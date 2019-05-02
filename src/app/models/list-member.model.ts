import {Office} from "./member.model";

export class ListMember {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public memberBankingAccountId: number,
        public offices: Office[],
        public sumCredits: number
    ) {}
}
