export class User {
    constructor (
        public name: string,
        public vorname: string,
        public geburtsdatum: Date,
        public geschlecht: string,
        public status: string,
        public email: string,
        public plz: string,
        public ort: string,
        public straße: string,
        public hnr: number,
        public bankkonto: string,
        public gueltigkeit: Date,
        public mustereinweisung: boolean,
        public amt?: string,
        public flugberechtigung?: string,
    ) { }
}
