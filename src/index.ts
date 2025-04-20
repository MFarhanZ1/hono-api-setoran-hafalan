import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { RegExpRouter } from "hono/router/reg-exp-router";
import { BlankEnv, BlankSchema } from "hono/types";
import GlobalHandler from "./handlers/global.handler";
import globalRoute from "./routes/global.route";
import setoranRoute from "./routes/setoran.route";

// Init Hono Object and Load environment variables from .env file
const app: Hono<BlankEnv, BlankSchema, "/"> = new Hono({ router: new RegExpRouter() });
const { APP_PORT }: NodeJS.ProcessEnv = process.env;

// Load all available middlewares
app.use('*', logger())
app.use('*', cors({
  origin: '*', // restrict this in production
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'X-Request-Id'],
  maxAge: 3600,
  credentials: true
}))

// Load all default routes for common handling
app.notFound(GlobalHandler.notFound);
app.onError(GlobalHandler.error);

// Load all available routes
app.route("/", globalRoute);
app.route("/", setoranRoute);

export default {
  port: APP_PORT || 5000,
  fetch: app.fetch,
  hostname: '0.0.0.0',
};

console.log(`[INFO] Server is on fire at port ${APP_PORT}! 🔥`);