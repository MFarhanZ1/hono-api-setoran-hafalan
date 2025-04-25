import { Context, Next } from "hono";
import { getConnInfo } from "hono/bun";

export default class LogMiddleware {
	public static async extractNetworkInformation(c: Context, next: Next) {
		// retrieve all network information
		const conn = getConnInfo(c)
		const ip = c.req.header("x-forwarded-for")?.split(",")[0]?.trim() || conn.remote.address
		const user_agent = c.req.header("user-agent")
		
		// set network_log_data to context
		c.set("network_log_data", {ip, user_agent})
		return next()
	}
}
