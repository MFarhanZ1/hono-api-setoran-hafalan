import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import DosenHandler from "../handlers/dosen.handler";
import AuthMiddleware from "../middlewares/auth.middleware";

const dosenRoute = new Hono({ router: new RegExpRouter() });

dosenRoute.get("/pa-saya", AuthMiddleware.JWTBearerTokenExtraction, DosenHandler.getPASaya);

export default dosenRoute;