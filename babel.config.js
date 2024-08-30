module.exports = api => {
    api.cache(true)

    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: [
                        '.ts',
                        '.tsx',
                    ],
                    alias: {
                        lib: './src/lib',
                        assets: './src/assets',
                        features: './src/features',
                    },
                },
            ],
            'react-native-reanimated/plugin',
        ],
    }
}
