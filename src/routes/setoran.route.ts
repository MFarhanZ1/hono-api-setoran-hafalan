import { Hono } from "hono";
import { RegExpRouter } from "hono/router/reg-exp-router";
import SetoranHandler from "../handlers/setoran.handler";
import AuthMiddleware from "../middlewares/auth.middleware";
import { zValidator } from "@hono/zod-validator";
import { postSetoranSchema } from "../validators/setoran.validator";
import { zodError } from "../utils/zod-error.util";

const setoranRoute = new Hono({ router: new RegExpRouter() });

setoranRoute.get(
	"/dosen/pa-saya",
	AuthMiddleware.JWTBearerTokenExtraction,
	SetoranHandler.getPASaya
);
setoranRoute.get(
	"/mahasiswa/setoran-saya",
	AuthMiddleware.JWTBearerTokenExtraction,
	SetoranHandler.getSetoranSaya
);
setoranRoute.get(
	"/mahasiswa/setoran/:nim",
	AuthMiddleware.JWTBearerTokenExtraction,
	SetoranHandler.getSetoranMahasiswa
);
setoranRoute.post(
	"/mahasiswa/setoran/:nim",
	zValidator("json", postSetoranSchema, zodError),
	AuthMiddleware.JWTBearerTokenExtraction,
	SetoranHandler.postSetoranMahasiswa
);

export default setoranRoute;
