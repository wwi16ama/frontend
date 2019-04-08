export class PlaneLog {
    constructor(
        public id: number,
        public refuelDateTime: string,
        public memberId: number,
        public location: string,
        public startCount: number,
        public endCount: number,
        public fuelPrice: number
    ) { }
}
