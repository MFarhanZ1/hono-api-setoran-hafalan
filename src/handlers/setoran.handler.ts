import { Context } from "hono";
import SetoranService from "../services/setoran.service";
import { APIError } from "../utils/api-error.util";

export default class SetoranHandler {

    public static async getPASaya(c: Context) {
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
        return c.json(await SetoranService.getPASaya({email}));
    }

    public static async getSetoranSaya(c: Context) {
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
        return c.json(await SetoranService.getSetoranSaya({email}));
    }

    public static async getSetoranMahasiswa(c: Context) { 
        const { nim } = c.req.param();       
        return c.json(await SetoranService.getSetoranMahasiswa({nim}));
    }

    public static async postSetoranMahasiswa(c: Context) {     
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

        const { nim } = c.req.param();
        const { data_setoran, tgl_setoran } = await c.req.json();

        return c.json(await SetoranService.postSetoranMahasiswa({email, nim, data_setoran, tgl_setoran}));
    }
    
}