export class Plane {
    constructor(
        public number: string,
        public name: string,
        public position: string,
        public neededAuthorization: neededAuthorizationEnum,
        public id?: number
    ) { }
}

export enum neededAuthorizationEnum {
    PPLA = 'PPL-A',
    PPLB = 'PPL-B',
    BZFI = 'BZF-I',
    BZFII = 'BZF-II',
}
