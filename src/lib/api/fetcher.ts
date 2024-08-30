import { ENV } from 'lib/config'

type FetcherProps = {
    url: string
    params?: Record<string, string | number>
}

export const fetcher = async <T>({
    url,
    params = {},
}: FetcherProps) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('Fetching...', url, params)
    }

    const apiURL = new URL(`${ENV.EXPO_PUBLIC_API_URL}${url}`)

    Object.entries(params).forEach(([key, value]) => {
        if (!value) {
            return
        }

        apiURL.searchParams.set(key, String(value))
    })
    apiURL.searchParams.set('key', ENV.EXPO_PUBLIC_API_KEY)

    const response = await fetch(apiURL.toString(), {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    })

    if (response.status !== 200) {
        throw new Error(`Something went wrong - ${response.status}`)
    }

    return response.json() as Promise<T>
}
