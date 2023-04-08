import type { App } from 'vue'
import type { Router } from 'vue-router'

export interface ViteSSRContext {
  isClient: boolean
  app: App
  router: Router
  initialRoute: Record<string, any>
}
