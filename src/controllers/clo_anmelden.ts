import { Request, Response, NextFunction } from "express";

/**
 * GET /login
 * Login page.
 */
export let getPage = (req: Request, res: Response) => {
  res.render("clo_anmelden", {
    title: "Anmelden im Dorfladen"
  });


};
