/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly ST_SERVER_HOSTNAME: string // Example: "http://scoretrak.example.com:30080"
    readonly ST_COMP_NAME: string // Example: "Lockdown"
    readonly ST_LOCAL_STORAGE_PREFIX: string // Example: "st_"
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
