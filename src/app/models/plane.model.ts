export class Plane {
    constructor(
        public id: number,
        public number: string,
        public name: string,
        public position: string,
        public neededAuthorization: neededAuthorizationEnum
    ) {}
}

export enum neededAuthorizationEnum {
    PPLB = 'PPL-B',
    PPLA = 'PPL-A',
    BZFI = 'BZF-I',
    BZFII = 'BZF-II',
}
