export class Pilotlog {
    constructor(
        public flightnumber: number,
        public planenumber: string,
        public departurelocation: string,
        public departuretime: string,
        public arrivallocation: string,
        public arrivaltime: string,
        public duration: number,
        public flightwithguests: boolean
    ) {}
}