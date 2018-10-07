export class Plane {
    constructor(
        public id: number,
        public number: string,
        public name: string,
        public position: string,
        public neededAuthorization: neededAuthorizationEnum
    ) { }
}

export enum neededAuthorizationEnum {
    PPLA = 'PPL-A',
    PPLB = 'PPL-B',
    BZFI = 'BZF-I',
    BZFII = 'BZF-II',
}
