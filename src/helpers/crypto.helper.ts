import SimpleCrypto from "simple-crypto-js";

export default class CryptoHelper {

    // --- Perubahan 1: Efisiensi ---
    // Buat instance crypto sekali saja dan gunakan kembali.
    // Ini jauh lebih efisien daripada membuatnya di setiap panggilan method.
    private static crypto = new SimpleCrypto(process.env.SECRET_KEY_PDF_VALIDATOR);

    /**
     * Mengenkripsi NIM menjadi sebuah ID yang aman untuk digunakan di dalam URL.
     * Hasil enkripsi tidak akan mengandung karakter '/' atau '+'.
     *
     * @param nim Nomor Induk Mahasiswa yang akan dienkripsi.
     * @returns ID terenkripsi yang URL-safe.
     */
    public static generateEncryptedIDByNIM(nim: string): string {
        const encryptedData = this.crypto.encrypt(nim) as string;

        // --- Perubahan 2: URL-Safe Encoding ---
        // Ganti karakter yang tidak aman untuk URL
        return encryptedData
            .replace(/\//g, '_hanz_') // Ganti '/' dengan '_hanz_'
            .replace(/\+/g, '-hanz-').toString() as string; // Ganti '+' dengan '-hanz-'
    }

    /**
     * Mendekripsi sebuah ID (yang sebelumnya dibuat agar URL-safe) kembali menjadi NIM.
     *
     * @param urlSafeId ID terenkripsi yang didapat dari URL.
     * @returns NIM asli jika dekripsi berhasil, atau `null` jika ID tidak valid.
     */
    public static decryptIDToNIM(id: string): string {        
        // --- Perubahan 3: URL-Safe Decoding ---
        // Kembalikan dulu karakter ke format Base64 standar SEBELUM dekripsi
        const originalEncryptedData = id
            .replace(/_hanz_/g, '/') // Kembalikan '$hanz$' menjadi '/'
            .replace(/-hanz-/g, '+'); // Kembalikan '&hanz&' menjadi '+'

        return this.crypto.decrypt(originalEncryptedData).toString() as string;
    }
}