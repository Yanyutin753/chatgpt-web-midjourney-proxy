import { ss } from '@/utils/storage'
import { t } from '@/locales'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  backgroundImage: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://avatars.githubusercontent.com/u/132346501?v=4&size=64',
      name: t('mjset.sysname'),//'AI绘图',
      backgroundImage: process.env.BACKGROUND_IMAGE ?? "",
      description: 'Star on <a href="https://github.com/Yanyutin753" class="text-blue-500" target="_blank" >GitHub</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
