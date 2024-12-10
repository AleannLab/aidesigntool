import http from "http"

// http.globalAgent = new http.Agent({ keepAlive: false })

const env = {
    optional: (key: string, ifEmpty: string): string => process.env[key] ?? ifEmpty,
    required: (key: string): string => {
        const value = process.env[key]

        if (value) {
            return value
        }

        throw new Error(`Missing required env: ${key}`)
    },
}

export const Config = {
    database: {
        schema: "aidesigntool"
    },
}
