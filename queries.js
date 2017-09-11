//queries fuer db //db connection herstellen, mittels bluebird

var promise = require('bluebird');

var options = {
// init  options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'dorfladen:dorfladen//localhost:5432/dorfladen';
var db = pgp(connectionString);

// query funktionen fuer ausgabe aller gruppen und user aus db, sowie erstellen und aendern eines users

module.exports = {
  getAllGruppen: getAllGruppen,
  getAllUser: getAllUser,
  createUser: createUser,
  updateUser: updateUser,
};

//alle gruppen aus db lesen und auflisten
function getAllGruppen(req, res, next) {
    db.any('select* from gruppen')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Alle Gruppen des Dorfladens'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  //alle user aus db lesen und auflisten
function getAllUser(req, res, next) {
    db.any('select* from benutzer')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Alle Benutzer des Dorfladens'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

// benutzer erstellen und in db schreiben
  function createUser(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('insert into benutzer (vorname, nachname, email, passwort, anrede, geburtsdatum)' +
        'values(${vorname}, ${nachname},${email}, ${passwort}, ${anrede}),${gebutsdatum}',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Benutzer eingefuegt'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  // benutzer aktualisieren -- via user id ds identifizieren 
  function updateUser(req, res, next) {
    db.none('update benutzer set vorname=$1, nachname=$2, email=$3, passwort=$4, anrede=$5, geburtsdatun=$6 where id=$7',
      [req.body.name, req.body.breed, parseInt(req.body.age),
        req.body.sex, parseInt(req.params.id)])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Benutzer aktualisiert'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }  