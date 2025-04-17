import { GlobalServiceHealthResponse, GlobalServiceIntroduceResponse } from "../types/global.type"

export default class GlobalService {

    public static async introduce(): Promise<GlobalServiceIntroduceResponse> {
        return {
            'response': true,
            'message': 'Cihuy, Halow Semua 👋 ~ Selamat datang di API Setoran Hafalan! 🎉',
            'version': process.env.APP_VERSION || '1.0.0',
            'contributor': 'https://github.com/MFarhanZ1/hono-api-setoran-hafalan',
            'timezone': `Asia/Jakarta ~ ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB`
        }
    }

    public static async health(): Promise<GlobalServiceHealthResponse> {
        return {
            'response': true,
            'message': 'Cihuy, API Setoran Hafalan sehat-sehat saja! 😁',
            'status': 'OK',
            'uptime': process.uptime(),
            'memoryUsage': process.memoryUsage()
        }
    }

}