export interface CommonResponse {
    response: boolean;
    message: string;
}

export interface GlobalIntroduceResponse extends CommonResponse {
    version: string;
    contributor: string;
    timezone: string;
}

export interface GlobalHealthResponse extends CommonResponse {
    status: string;
    uptime: number;
    memoryUsage: {
        rss: number;
        heapTotal: number;
        heapUsed: number;
        external: number;
    };
}