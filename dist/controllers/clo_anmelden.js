"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET /login
 * Login page.
 */
exports.getPage = (req, res) => {
    res.render("clo_anmelden", {
        title: "Anmelden im Dorfladen"
    });
};
//# sourceMappingURL=clo_anmelden.js.map