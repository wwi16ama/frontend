export class PlaneLog {
    constructor(
        public id: number,
        refuelDateTime: string,
        memberId: number,
        location: string,
        startCount: number,
        endCount: number,
        totalPrice: number
    ) { }
}
