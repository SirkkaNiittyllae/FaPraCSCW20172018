import { Request, Response, NextFunction } from "express";

/**
 * GET /login
 * Login page.
 */
export let getPage = (req: Request, res: Response) => {
  res.render("clo_login", {
    title: "Anmelden im Dorfladen"
  });


};
