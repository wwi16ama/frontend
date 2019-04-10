export class ListCredit {
    constructor(
        public id: number,
        public serviceName: ServiceNameEnum,
        public amount: number,
        public period: PeriodEnum
    ) {}
}

export enum ServiceNameEnum {
    J_VORSTANDSMITGLIED = 'Vorstandsmitglied',
    J_FLUGLEHRER = 'Fluglehrer',
    J_FLUGWART = 'Flugwart',
    T_TAGESEINSATZ = 'Kontrollturm',
    T_PILOT = 'Pilot'
}

export namespace ServiceNameEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case ServiceNameEnum.J_VORSTANDSMITGLIED: return 'Vorstandsmitglied';
            case ServiceNameEnum.J_FLUGLEHRER: return 'Fluglehrer';
            case ServiceNameEnum.J_FLUGWART: return 'Flugwart';
            case ServiceNameEnum.T_TAGESEINSATZ: return 'Kontrollturm';
            case ServiceNameEnum.T_PILOT: return 'Pilot';
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
