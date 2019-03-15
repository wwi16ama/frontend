export class Pilotlog {
    constructor(
        public flightId: number,
        public planeNumber: string,
        public departureLocation: string,
        public departureTime: string,
        public arrivalLocation: string,
        public arrivalTime: string,
        public flightWithGuests: boolean,
        public flightDuration?: string
    ) {}
}
