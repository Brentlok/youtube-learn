import { useEffect } from 'react'

type UseDebouncedProps<T> = {
    value: T
    delay: number
    callback: (value: T) => void
}

export const useDebounce = <T>({
    value,
    delay,
    callback,
}: UseDebouncedProps<T>) => {
    useEffect(() => {
        const handler = setTimeout(() => {
            callback(value)
        }, delay)

        return () => clearTimeout(handler)
    }, [value, callback])
}
