import { isDesktop } from 'react-device-detect'
import { toast } from 'react-toastify'

const mobileOnlyTrigger = (callback: Function) => {
  if (isDesktop) {
    toast('모바일에서 실행해주세요!', { type: 'error' })
    return
  }
  callback()
}

export default mobileOnlyTrigger
