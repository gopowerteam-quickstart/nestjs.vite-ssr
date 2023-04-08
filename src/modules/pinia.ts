import { createPinia } from 'pinia'

import persist from 'pinia-plugin-persistedstate'

export const install: (ctx: any) => void = ({
  isClient,
  initialState,
  app,
}: any) => {
  const pinia = createPinia()
  pinia.use(persist)
  app.use(pinia)

  if (isClient)
    pinia.state.value = initialState.pinia || {}
  else
    initialState.pinia = pinia.state.value
}
