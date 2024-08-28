import { colors } from './colors'

const GAP = 8

export const theme = {
    colors,
    gap: (size: number) => GAP * size,
}

export type Theme = typeof theme
