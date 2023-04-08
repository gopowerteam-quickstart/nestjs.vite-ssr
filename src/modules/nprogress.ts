import NProgress from 'nprogress'
import type { ViteSSRContext } from '@/interfaces/vite-ssr.interface'

export const install: (ctx: ViteSSRContext) => void = ({
  isClient,
  router,
}: ViteSSRContext) => {
  if (isClient) {
    NProgress.configure({
      easing: 'ease',
      speed: 500,
    })

    router.beforeEach((to, from) => {
      if (to.path !== from.path) NProgress.start()
    })

    router.afterEach(() => {
      NProgress.done()
    })
  }
}
