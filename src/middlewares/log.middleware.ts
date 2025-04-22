import { Context, Next } from "hono";
import { getConnInfo } from "hono/bun";

export default class LogMiddleware {
	public static async extractNetworkInformation(c: Context, next: Next) {
        const conn = getConnInfo(c)
		c.set("network_log_data", {ip: conn.remote.address, user_agent: c.req.header("user-agent")})
		return next()
	}
}
