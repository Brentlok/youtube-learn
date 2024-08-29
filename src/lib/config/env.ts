const envs = [
    'EXPO_PUBLIC_API_URL',
    'EXPO_PUBLIC_API_KEY',
] as const

export const ENV = Object.fromEntries(
    envs.map(env => {
        const envValue = process.env[env]

        if (!envValue) {
            throw new Error(`Missing env variable: ${env}`)
        }

        return [env, envValue]
    }),
) as Record<typeof envs[number], string>
