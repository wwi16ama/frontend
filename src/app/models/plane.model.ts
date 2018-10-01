export class Plane {
    constructor(
        public id: number,
        public number: string,
        public name: string,
        public position: string,
        public neededAuthorization: neededAuthorization,
    ) {}
}

export enum neededAuthorization {
    PPLA = 'PPL-A',
    PPLB = 'PPL-B'
}