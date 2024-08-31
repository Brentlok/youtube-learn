import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Youtube data api is limited so we don't want to retry and lose tokens
            retry: false,
        },
    },
})
