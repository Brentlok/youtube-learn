import { createStore } from 'stan-js'

export const { actions, useStore } = createStore({
    isAuthenticated: false,
})
