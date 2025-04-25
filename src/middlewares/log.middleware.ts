import { Context, Next } from "hono";
import { getConnInfo } from "hono/bun";

export default class LogMiddleware {
	public static async extractNetworkInformation(c: Context, next: Next) {
        const conn = getConnInfo(c)
		const ip = c.req.header("x-forwarded-for")?.split(",")[0]?.trim() || conn.remote.address
		c.set("network_log_data", {ip: ip, user_agent: c.req.header("user-agent")})
		return next()
	}
}
