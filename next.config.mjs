/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "royalpass-web.onrender.com",
                port: "",
            },
        ],
    }
};

export default nextConfig;
