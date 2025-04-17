import { Context } from "hono";
import { BlankEnv, BlankInput, HTTPResponseError } from "hono/types";
import GlobalService from "../services/global.service";
import { GlobalHealthResponse, GlobalIntroduceResponse } from "../types/global.type";

export default class GlobalHandler {

    public static async introduce(c: Context<BlankEnv, "/", BlankInput>) {
        const introduceMessage: GlobalIntroduceResponse = await GlobalService.introduce();
        return c.json(introduceMessage, 200);
    }

    public static async health(c: Context<BlankEnv, "/", BlankInput>) {
        const healthMessage: GlobalHealthResponse = await GlobalService.health();
        return c.json(healthMessage, 200);
    }

    public static async notFound(c: Context<BlankEnv, any, {}>) {
        return c.json(
            {
                response: false,
                message: "Waduh, mau nyari apa kamu mas? 😅",
            },
            404
        );
    }
    
    public static async error(err: Error | HTTPResponseError, c: Context<BlankEnv, any, {}>) {
        // Log the error to the console for debugging
        console.error(`[ERROR] ${err.message}`);
        console.error(err.stack);

        // Don't expose internal errors in production
        if (process.env.NODE_ENV === "production") {
            return c.json(
                {
                    response: false,
                    message: "Waduh, sepertinya ada yang salah di server kami! 😭",
                },
                500
            );
        }

        return c.json(
            {
                response: false,
                message: err.message,
            },
            500
        );
    }
    
}