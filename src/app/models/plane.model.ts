export class Plane {
    constructor(
        public number: string,
        public name: string,
        public position: string,
        public neededAuthorization: neededAuthorizationEnum,
        public pricePerBookedHour: number,
        public pricePerFlightMinute: number,
        public id?: number        
    ) { }
}

export enum neededAuthorizationEnum {
    PPLA = 'PPL-A',
    PPLB = 'PPL-B',
    BZFI = 'BZF-I',
    BZFII = 'BZF-II',
}

export namespace neededAuthorizationEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case neededAuthorizationEnum.PPLA: return 'PPLA';
            case neededAuthorizationEnum.PPLB: return 'PPLB';
            case neededAuthorizationEnum.BZFI: return 'BZFI';
            case neededAuthorizationEnum.BZFII: return 'BZFII';
        }
    }
}
