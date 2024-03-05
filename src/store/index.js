import { createStore, createLogger } from 'vuex'

// Global vuex
import AppModule from './app'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    AppModule
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})