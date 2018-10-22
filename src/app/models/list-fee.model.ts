export class ListFee {
    constructor(
        public memberCategory: memberCategoryEnum,
        public memberFee: number
    ) {}
}

export enum memberCategoryEnum {
    ACTIVE = 'Aktives Mitglied',
    U20ACTIVE = 'Aktives Mitglied unter 20 Jahren',
    PASSIVE = 'Passives Mitglied'
}

export namespace memberCategoryEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case memberCategoryEnum.ACTIVE: return 'ACTIVE';
            case memberCategoryEnum.U20ACTIVE: return 'U20ACTIVE';
            case memberCategoryEnum.PASSIVE: return 'PASSIVE';
        }
    }
}
