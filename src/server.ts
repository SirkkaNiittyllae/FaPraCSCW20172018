/**
 * Module dependencies.
 */
import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as session from "express-session";
import * as expressValidator from "express-validator";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as lusca from "lusca";
import * as flash from "express-flash"; // display messages to the user
import * as path from "path";
const ejs = require("ejs-locals");

/**
 * Controllers (route handlers).
 */
import * as homeController from "./controllers/home";
import * as userController from "./controllers/user";
import * as clo_loginController from "./controllers/clo_login";
import * as clo_impressumController from "./controllers/clo_impressum";
import * as clo_agbsController from "./controllers/clo_agbs";
import * as clo_shopController from "./controllers/clo_shop";
import * as clo_registrierenController from "./controllers/clo_registrieren";
import * as clo_gruppenController from "./controllers/clo_gruppen";
import * as clo_anmeldenController from "./controllers/clo_anmelden";
/**
 * Create Express server.
 */
const app = express();


/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.engine("ejs", ejs);
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "Meine Katze, deine Katze, haben eine linke Tatze"
}));
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));


/**
 * Primary app routes.
 */
app.get("/", homeController.index);

/**
 * User examples routes.
 */
app.get("/user", userController.getPage);
app.get("/clo_login", clo_loginController.getPage);
app.get("/clo_impressum", clo_impressumController.getPage);
app.get("/clo_agbs", clo_agbsController.getPage);
app.get("/clo_anmelden", clo_anmeldenController.getPage);
app.get("/clo_registrieren", clo_registrierenController.getPage);
app.get("/clo_gruppen", clo_gruppenController.getPage);
app.get("/clo_shop", clo_shopController.getPage);



//db 
/**
var options = {
  //init  options
    promiseLib: promise
  };
var promise = require('bluebird');
var pgp = require('pg-promise')(options);
var db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'dorfladen',
  user: 'dorfladen',
  password: 'dorfladen'
});

//oder 
//var connectionString = 'postgres://dorfladen:dorfladen@localhost:5432/dorfladen';
//var db = pgp(connectionString);

 
*/


/**
 TODO: db.definieren & stuff importieren
//app.get("/api/gruppen", db.getAllGruppen);
//ap.post('/api/user', db.createUser);
//app.put('/api/user/:id', db.updateUser);
//app.get('/api/user/', db.getAllUser);
*/

/**
 * Page not found. Last route.
 */
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.render("404", { url: req.url, title: "404 Error" });
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
