import type { LocationQuery, RouteParams } from 'vue-router'

export interface Menu {
  key: string
  path?: string
  name?: string
  requireAuth?: boolean
  requireRoles?: Array<string | number>
  icon: string
  title: string
  children?: Menu[]
  // 是否为叶子节点
  isLeaf?: boolean
}

export interface Tab extends Menu {
  menuKey: string
  query: LocationQuery
  params: RouteParams
}
