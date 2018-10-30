export class ListFee {
    constructor(
        public category: categoryEnum,
        public fee: number
    ) {}
}

export enum categoryEnum {
    ACTIVE = 'Aktives Mitglied',
    U20ACTIVE = 'Aktives Mitglied unter 20 Jahren',
    PASSIVE = 'Passives Mitglied',
    HONORARYMEMBER = 'Ehrenmitglied'
}

export namespace categoryEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case categoryEnum.ACTIVE: return 'ACTIVE';
            case categoryEnum.U20ACTIVE: return 'U20ACTIVE';
            case categoryEnum.PASSIVE: return 'PASSIVE';
            case categoryEnum.HONORARYMEMBER: return 'HONORARYMEMBER';
        }
    }
}
