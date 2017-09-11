CREATE DATABASE Dorfladen;

\c Dorfladen;

CREATE TABLE benutzer (
  ID SERIAL PRIMARY KEY,
  vorname VARCHAR,
  nachname VARCHAR,
  email VARCHAR,
  passwort VARCHAR,
  anrede VARCHAR,
  geburtsdatum VARCHAR
);

INSERT INTO benutzer (vorname, nachname, email, passwort, anrede, geburtsdatum)
    VALUES ('max', 'mustermann', 'mm@mm.mm', 'password','herr','01.01.1990');

INSERT INTO benutzer (vorname, nachname, email, passwort, anrede, geburtsdatum)
    VALUES ('moritz', 'mustermann', 'mm2@mm.mm', 'password','herr','01.01.1990');

CREATE TABLE gruppen (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  createdate VARCHAR
);
INSERT INTO gruppen(name, createdate)
    VALUES ('testgruppe1','01.01.2000');

INSERT INTO gruppen(name, createdate)
    VALUES ('testgruppe2','01.01.2000');