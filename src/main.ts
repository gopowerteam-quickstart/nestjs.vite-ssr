import createSSR from 'vite-ssr'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '~/styles/index.less'
import App from './App.vue'
import { bootstrap } from './bootstrap'

/**
 * 加载模块
 * @param ctx
 */
function installModules(ctx: any) {
  Object.values(
    import.meta.glob('./modules/*.ts', { eager: true }) as Record<
      string,
      { install: (ctx: any) => void }
    >,
  ).forEach(i => i.install?.(ctx))
}

export default createSSR(App, { routes: [] }, (ctx) => {
  // 安装基础模块
  installModules(ctx)
  // 安装启动模块
  bootstrap({ app: ctx.app, router: ctx.router })
})
