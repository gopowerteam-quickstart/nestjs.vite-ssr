import { defineStore } from 'pinia'

interface AppState {
  // 系统准备状态
  ready: boolean
  // 页面标题
  title: string
}

const initialState: AppState = {
  ready: false,
  title: '',
}

export const useAppStore = defineStore('app', {
  state: () => initialState,
  actions: {
    /**
     * 更新系统状态
     */
    setReady() {
      this.ready = true
    },
    /**
     * 页面标题
     */
    updateTitle(title: string) {
      this.title = title
    },
  },
})