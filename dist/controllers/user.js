"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET /login
 * Login page.
 */
exports.getPage = (req, res) => {
    res.render("user", {
        title: "Mein Profil"
    });
};
//# sourceMappingURL=user.js.map