# Youtube Learn

## Running the app

### Required environment variables

```bash
EXPO_PUBLIC_API_URL='https://youtube.googleapis.com/youtube/v3'
EXPO_PUBLIC_API_KEY='{YOUR_API_KEY}'
```

### Running commands

```bash
bun i
bun prebuild
bun ios
bun android
```

## App structure

```
├── app (file based routing)
├── features (feature such as Home screen, Video Player, etc.)
├── lib
│   ├── api (fetcher, endpoints, etc.)
│   ├── components (reusable components)
│   ├── config (app configuration)
│   ├── hooks (custom hooks)
│   ├── locale (translations)
│   ├── models (data models)
│   ├── store (app state management)
│   ├── utils (app utils)
│   └── styles (app styles)
```
