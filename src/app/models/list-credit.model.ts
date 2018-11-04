export class ListCredit {
    constructor(
        public id: number,
        public service: ServiceNameEnum,
        public amount: number,
        public period: PeriodEnum
    ) {}
}

export enum ServiceNameEnum {
    VORSTANDSMITGLIED = 'Vorstandsmitglied',
    FLUGLEHRER = 'Fluglehrer',
    FLUGWART = 'Flugwart',
    TAGESEINSATZ = 'Kontrollturm',
    PILOT = 'Pilot'
}

export namespace ServiceNameEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case ServiceNameEnum.VORSTANDSMITGLIED: return 'Vorstandsmitglied';
            case ServiceNameEnum.FLUGLEHRER: return 'Fluglehrer';
            case ServiceNameEnum.FLUGWART: return 'Flugwart';
            case ServiceNameEnum.TAGESEINSATZ: return 'Kontrollturm';
            case ServiceNameEnum.PILOT: return 'Pilot';
        }
    }
}

export enum PeriodEnum {
    YEAR = '€/Jahr',
    DAY = '€/Tag'
}

export namespace PeriodEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case PeriodEnum.YEAR: return '€/Jahr';
            case PeriodEnum.DAY: return '€/Tag';
        }
}
}
