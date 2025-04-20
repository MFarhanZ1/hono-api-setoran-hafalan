import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import SetoranHandler from "../handlers/setoran.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const setoranRoute = new Hono({ router: new RegExpRouter() });

setoranRoute.get("/dosen/pa-saya", AuthMiddleware.JWTBearerTokenExtraction, SetoranHandler.getPASaya);

export default setoranRoute;