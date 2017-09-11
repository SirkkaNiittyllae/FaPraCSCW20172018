class user {
    vollName: string;
    constructor (public vorname: string, public nachname: string, public email: string, public geburtstag: string, public anrede: string, public passwort: string ) {
        this.vollName = firstName + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    email: string;
    geburtstag: string;
    passwort: string; 
}

