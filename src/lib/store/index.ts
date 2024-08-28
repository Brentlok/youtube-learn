import { createStore } from 'stan-js'
import { storage } from 'stan-js/storage'

export const { actions, useStore } = createStore({
    isAuthenticated: storage(false),
})
