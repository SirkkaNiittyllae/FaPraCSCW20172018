"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET /login
 * Login page.
 */
exports.getPage = (req, res) => {
    res.render("clo_login", {
        title: "Anmelden im Dorfladen"
    });
};
//# sourceMappingURL=clo_login.js.map