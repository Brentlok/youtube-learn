import { colors } from './colors'

const GAP = 8

export const theme = {
    colors,
    gap: (size: number) => GAP * size,
    hexToRgba: (hex: string, opacity: number) =>
        hex
            .replace('#', '')
            .split(/(?=(?:..)*$)/)
            .map(x => parseInt(x, 16))
            .filter(num => !isNaN(num))
            .reduce((acc, color) => `${acc}${color},`, 'rgba(')
            .concat(`${opacity})`),
    circle: (size: number) => ({
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
    }),
}

export type Theme = typeof theme
