declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_URL: string,
            PRIVATE_KEY: string,
        }
    }
}

export {}
