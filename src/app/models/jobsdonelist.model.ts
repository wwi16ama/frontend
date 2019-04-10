export class JobsDoneList {
    constructor(
        public id: number,
        public name: Name,
        public gutschrift: number,
        public startTime: string,
        public endTime: string,
    ) {}
}

export enum Name {
    T_PILOT = 'Pilot',
    T_TAGESEINSATZ = 'Tageseinsatz',
    J_FLUGLEHRER = 'Fluglehrer'
}

export namespace Name {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case Name.T_PILOT: return 'T_PILOT';
            case Name.J_FLUGLEHRER: return 'J_FLUGLEHRER';
            case Name.T_TAGESEINSATZ: return 'T_TAGESEINSATZ';
        }
    }
}
