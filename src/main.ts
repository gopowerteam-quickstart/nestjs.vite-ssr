import createSSR from 'vite-ssr'
import App from './App.vue'
import { routes } from './router'

declare const aaa: string

export default createSSR(App, { routes }, (context) => {
  /* Vite SSR main hook for custom logic */
  // const { app, router, initialState } = context
})
