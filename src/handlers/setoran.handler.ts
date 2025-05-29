import { Context } from "hono";
import SetoranService from "../services/setoran.service";
import { APIError } from "../utils/api-error.util";

export default class SetoranHandler {

    public static async getPASaya(c: Context) {
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
        return c.json(await SetoranService.getPASaya({email}));
    }

    public static async getKartuMurojaahSaya(c: Context) {
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

        // dapatkan user agent dan ip user buat log
        const network_log_data = c.get("network_log_data");

        const { kartuMurojaah, namaFile } = await SetoranService.getKartuMurojaahSaya({email, network_log_data});
        
        return c.body(kartuMurojaah, 200, {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=${namaFile}`,
            "Access-Control-Expose-Headers": "Content-Disposition",
        });
    }

    public static async getKartuMurojaahDigital(c: Context) {
        const { id } = c.req.param();
        
        return c.json(await SetoranService.getKartuMurojaahDigital({id}));
    }

    public static async getSetoranSaya(c: Context) {
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);
        return c.json(await SetoranService.getSetoranSaya({email}));
    }

    public static async getSetoranMahasiswa(c: Context) { 
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

        const { nim } = c.req.param();       
        return c.json(await SetoranService.getSetoranMahasiswa({nim, email}));
    }

    public static async postSetoranMahasiswa(c: Context) {     
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

        const { nim } = c.req.param();
        const { data_setoran, tgl_setoran } = await c.req.json();

        // dapatkan user agent dan ip user buat log
        const network_log_data = c.get("network_log_data");

        return c.json(await SetoranService.postSetoranMahasiswa({email, nim, data_setoran, tgl_setoran, network_log_data}));
    }

    public static async deleteSetoranMahasiswa(c: Context) {     
        const { email } = c.get("user");
        if (!email) throw new APIError("Waduh, email kamu kosong cuy! 😭", 404);

        const { nim } = c.req.param();
        const { data_setoran } = await c.req.json();

        // dapatkan user agent dan ip user buat log
        const network_log_data = c.get("network_log_data");

        return c.json(await SetoranService.deleteSetoranMahasiswa({email, nim, data_setoran, network_log_data}));
    }

}