import { Context } from "hono";
import DosenService from "../services/dosen.service";
import { APIError } from "../utils/api-error.util";

export default class DosenHandler {

    public static async getPASaya(c: Context) {
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
        return c.json(await DosenService.getPASaya(email));
    }
    
}